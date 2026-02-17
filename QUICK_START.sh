#!/bin/bash
# Quick Setup & Test Script for OVH Email System

echo "================================"
echo "DIVA Email System - Quick Setup"
echo "================================"
echo ""

# Step 1: Check Node.js
echo "✓ Checking dependencies..."
if ! command -v node &> /dev/null; then
    echo "✗ Node.js not found. Please install Node.js"
    exit 1
fi

# Step 2: Install dependencies
echo "✓ Installing npm packages..."
npm install

# Step 3: Build the React app
echo "✓ Building React app for production..."
npm run build

# Step 4: Instructions
echo ""
echo "================================"
echo "READY FOR LOCAL TESTING!"
echo "================================"
echo ""
echo "Before running, make sure .env.local has:"
echo "  - SMTP_USER=your-email@divaeasy.com"
echo "  - SMTP_PASS=your-app-password"
echo ""
echo "OPTION 1: Using PHP Built-in Server (Recommended)"
echo "  Run this in the project root:"
echo "  → php -S localhost:8000"
echo ""
echo "  Then visit:"
echo "  → http://localhost:8000/dist/"
echo ""
echo "OPTION 2: Using Apache/XAMPP"
echo "  1. Copy project to htdocs"
echo "  2. Update VITE_API_ENDPOINT in .env.local"
echo "  3. npm run build"
echo "  4. Visit http://localhost/your-project/dist/"
echo ""
echo "TEST THE FORM:"
echo "  1. Fill out the contact form"
echo "  2. Submit and check:"
echo "     - Browser console for responses"
echo "     - Your email inbox (contact@divaeasy.com)"
echo ""
echo "✓ Setup complete! Ready to test."
