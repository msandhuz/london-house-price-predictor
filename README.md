# 🏠 London House Price Predictor

A machine learning web application that predicts house prices in London based on property features, location, and market trends. Built with React frontend, Flask backend, and ensemble machine learning models.

![React](https://img.shields.io/badge/React-18.2-blue)
![Flask](https://img.shields.io/badge/Flask-2.3-green)
![Python](https://img.shields.io/badge/Python-3.9-yellow)
![Machine Learning](https://img.shields.io/badge/ML-Ensemble%20Models-red)

---

## 🌟 Features

- **🎯 Accurate Predictions**: Ensemble ML model with 97.47% accuracy (R² score)  
- **🗺️ Interactive Maps**: Leaflet integration showing property locations  
- **📊 Data Visualizations**: Comprehensive market analysis charts  
- **📱 Responsive Design**: Mobile-friendly Material-UI interface  
- **⚡ Real-time Predictions**: Instant price estimates with confidence intervals  

---

## 🚀 Live Demo

- **Frontend**: [https://your-app.vercel.app](https://your-app.vercel.app)  
- **Backend API**: [https://your-api.railway.app](https://your-api.railway.app)

---

## 📊 Model Performance

- **R² Score**: 0.9747 (97.47% variance explained)  
- **RMSE**: £138,782  
- **MAE**: £79,851  
- **Improvement**: 35.9% better than best single model  

---

## 🏗️ Project Structure

```plaintext
london-house-price-predictor/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── services/         # API communication
│   │   └── App.js            # Main application
│   ├── public/               # Static assets
│   └── package.json          # Dependencies
├── backend/                  # Flask API
│   ├── api.py                # Main Flask application
│   ├── requirements.txt      # Python dependencies
│   └── trained_models/       # Machine learning models
├── .gitignore                # Git exclusion rules
└── README.md                 # This file
```
---

## 🤖 Machine Learning
**Model Architecture**
Ensemble Stacking combining multiple models:
- LightGBM
- XGBoost
- Random Forest
- Gradient Boosting
- Meta-model: Linear Regression

**Training Data**
- 418,201 training samples
- 169,378 test samples
- London property data 1995-2023
- 11 engineered features

**Performance Metrics**
- Cross-validation RMSE: £138,782
- Mean Absolute Error: £79,851
- R² Score: 0.9747
- No overfitting (test/train ratio: 0.992)


## 📈 Results Interpretation
- **High Confidence**: Predictions within 10% of actual prices
- **Medium Confidence**: Predictions within 10-20% of actual prices
- **Market Trends**: Model captures location premium and property features

## 🙏 Acknowledgments
London property data sources
- Machine learning libraries: Scikit-learn, LightGBM, XGBoost
- UI components: Material-UI, React-Leaflet
- Deployment platforms: Vercel, Railway
