#!/usr/bin/env node

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Yemeni Legal Platform API is running',
    timestamp: new Date().toISOString(),
    version: '0.1.0'
  });
});

// Test Case Analysis Endpoint
app.post('/api/analysis/case', (req, res) => {
  try {
    const { facts } = req.body;
    
    if (!facts) {
      return res.status(400).json({
        error: 'Facts are required',
        message: 'يجب تقديم وقائع القضية'
      });
    }

    // Placeholder response - will be enhanced with AI
    res.json({
      success: true,
      message: 'Case analysis in progress',
      data: {
        caseType: 'جنائية',
        classification: 'قيد المعالجة',
        relatedLaws: [],
        procedures: [],
        evidence: []
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Laws Endpoint
app.get('/api/laws', (req, res) => {
  res.json({
    success: true,
    data: {
      total: 0,
      laws: []
    },
    message: 'قاعدة القوانين اليمنية - قيد الإنشاء'
  });
});

// Search Endpoint
app.get('/api/search', (req, res) => {
  const { q } = req.query;
  
  res.json({
    success: true,
    query: q,
    results: [],
    message: 'البحث الذكي - قيد الإنشاء'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: `المسار ${req.path} غير موجود`,
    path: req.path
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🚀 API: http://localhost:${PORT}/api`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
