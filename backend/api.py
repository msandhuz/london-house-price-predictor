from flask import Flask, request, jsonify
import pandas as pd
import joblib
from flask_cors import CORS

app = Flask(__name__)

# Configure CORS properly
CORS(app, resources={
    r"/predict": {
        "origins": "http://localhost:3000",
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Add this middleware to handle OPTIONS requests
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
    return response

# Load your model
model = joblib.load('best_house_price_pipeline.pkl')

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'preflight'}), 200
    
    try:
        data = request.get_json()
        
        # Create input DataFrame
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
            'year': 2023,
            'month': 8,
            'day': 1,
            'price_per_sqm': None
        }])
        
        prediction = model.predict(input_data)[0]
        
        return jsonify({
            'prediction': prediction,
            'status': 'success'
        })
    
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 400

if __name__ == '__main__':
    app.run(debug=True, port=5100, host='0.0.0.0')