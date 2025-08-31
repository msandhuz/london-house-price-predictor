from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

# === Load the saved ensemble ===
ensemble_data = joblib.load('best_house_price_pipeline.pkl')

# Recreate wrapper class
class StackingEnsemble:
    def __init__(self, model_pipelines, meta_model):
        self.model_pipelines = model_pipelines
        self.meta_model = meta_model

    def predict(self, X):
        meta_features = []
        for name, pipeline in self.model_pipelines.items():
            meta_features.append(pipeline.predict(X))
        X_meta = pd.DataFrame(meta_features).T
        return self.meta_model.predict(X_meta)

# Create predictor instance
model = StackingEnsemble(
    ensemble_data['model_pipelines'],
    ensemble_data['meta_model']
)

# === Flask app ===
app = Flask(__name__)

# Update CORS for production - allow all origins or your frontend URL
CORS(app)  # Allow all origins for now

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'preflight'}), 200
    
    try:
        data = request.get_json()

        # Build input row
        input_data = pd.DataFrame([{
            'latitude': float(data['latitude']),
            'longitude': float(data['longitude']),
            'bathrooms': int(data['bathrooms']),
            'bedrooms': int(data['bedrooms']),
            'floorAreaSqM': float(data['floorAreaSqM']),
            'livingRooms': int(data['livingRooms']),
            'propertyType': data['propertyType'],
            'currentEnergyRating': data['currentEnergyRating'],
            'saleEstimate_confidenceLevel': int(data['confidenceLevel']),
            'room_count': int(data['bedrooms']) + int(data['bathrooms']) + int(data['livingRooms']),
            'bed_bath_ratio': int(data['bedrooms']) / (int(data['bathrooms']) + 0.01)
        }])

        # Make prediction
        prediction = model.predict(input_data)[0]

        return jsonify({
            'prediction': float(prediction),
            'status': 'success'
        })
    
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5100, host='0.0.0.0')