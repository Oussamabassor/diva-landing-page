# Email Setup Guide - PHPMailer + OVH SMTP

## Overview
The contact form uses **PHPMailer** with **OVH SMTP** configuration. Since you're hosting on OVH (not Vercel), the backend uses PHP instead of Node.js.

## ✅ What Was Changed

### Backend API
- Created `/api/send-email.php` - Server-side PHP handler
- Uses PHPMailer library to connect to OVH SMTP
- Sends two emails (to company and customer confirmation)

### Frontend
- Updated `src/pages/Contact.jsx`
- Calls `/api/send-email.php` endpoint
- Supports configurable API endpoint via `VITE_API_ENDPOINT`

## 🔧 Configuration Required

### Step 1: Update `.env.php` (PHP Backend Configuration)

**For Local Development:**
Edit `.env.php` with your OVH credentials:

```php
<?php
putenv('SMTP_HOST=ssl0.ovh.net');
putenv('SMTP_PORT=465');
putenv('SMTP_SECURE=true');
putenv('SMTP_USER=contact@divaeasy.com');  // Your OVH email
putenv('SMTP_PASS=YOUR-ACTUAL-OVH-PASSWORD-HERE');  // REQUIRED: Update this!
putenv('CONTACT_EMAIL=contact@divaeasy.com');
?>
```

**Note:** `.env.local` is for React/Vite frontend only. PHP uses `.env.php` on backend.

### Step 2: Get OVH App Password (Recommended)

1. Log in to [OVH Webmail](https://webmail.ovh.net)
2. Navigate to **Settings** > **Security**
3. Generate an **App Password** for this project
4. Use that password in `SMTP_PASS` in `.env.php`

## 📱 Local Development & Testing

### Option 1: Using PHP Built-in Server (Easiest)

```bash
# Terminal 1: Build your React app
npm run build

# Terminal 2: Start PHP server on port 8000 (from project root)
php -S localhost:8000

# Terminal 3: (Optional) Use another terminal for Vite dev server
npm run dev
```

Then visit `http://localhost:8000/dist/` to test the contact form.

### Option 2: Using Local Apache/XAMPP

1. Copy entire project to your htdocs folder
2. Make sure `api/send-email.php` is accessible at `http://localhost/diva-landing-page/api/send-email.php`
3. In `.env.local`, set: `VITE_API_ENDPOINT=http://localhost/diva-landing-page/api/send-email.php`
4. Build: `npm run build`
5. Visit the dist folder

### Testing the Email System Locally

**IMPORTANT:** Before testing, you must:

1. **Get your OVH password** from your OVH webmail
   - Log in to [OVH Webmail](https://webmail.ovh.net)
   - Go to Settings > Security
   - Create an **App Password** (recommended) or use your main password

2. **Update `.env.php`** with your password:
   ```php
   putenv('SMTP_USER=contact@divaeasy.com');
   putenv('SMTP_PASS=YOUR-ACTUAL-PASSWORD-HERE');  // Your OVH password
   ```

3. **Test with PowerShell:**
   ```powershell
   # Build React app
   npm run build

   # Start PHP server (Terminal 1)
   php -S localhost:8000

   # Test endpoint (Terminal 2)
   $body = @{
       name = "Test User"
       email = "test@example.com"
       company = "Test Company"
       subject = "Test Subject"
       message = "This is a test message"
   } | ConvertTo-Json

   $response = Invoke-WebRequest -Uri "http://localhost:8000/api/send-email.php" `
     -Method POST `
     -ContentType "application/json" `
     -Body $body

   $response.Content
   ```

**Expected Success Response (200):**
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error description",
  "details": "Technical details"
}
```

### Debugging Local Tests

Check the PHP server terminal output for detailed errors:
- `"SMTP credentials not configured"` - Update `.env.php` with your actual password
- `"Failed opening required 'vendor/autoload.php'"` - Run `composer require phpmailer/phpmailer`
- `"SMTP Error: Could not connect"` - OVH SMTP port/host issue, try different settings

## 🚀 OVH Production Deployment

### Step 1: Install PHPMailer on OVH Server

**Via FTP/File Manager:**
1. Download PHPMailer from [https://github.com/PHPMailer/PHPMailer](https://github.com/PHPMailer/PHPMailer)
2. Extract and upload the `src` folder to `vendor/PHPMailer/`

**Via SSH (if available):**
```bash
# SSH into your OVH server and run:
composer require phpmailer/phpmailer
# This creates vendor/ folder automatically
```

**Check:** Make sure `vendor/autoload.php` exists after upload

### Step 2: Upload Files to OVH

Your OVH directory structure should look like:
```
public_html/
├── api/
│   └── send-email.php
├── dist/
│   ├── index.html
│   ├── assets/
│   └── ...
├── vendor/
│   └── autoload.php (PHPMailer)
└── .htaccess
```

**Upload with FTP:**
1. Build your React app: `npm run build`
2. Upload `/dist` folder contents to your public_html (or root)
3. Upload `/api/send-email.php` to the same location
4. Upload PHPMailer `vendor/` folder

### Step 3: Configure Environment Variables on OVH

**Option A: Using `.env.php` file (Recommended)**

Create `/public_html/.env.php`:
```php
<?php
// .env.php - Keep this file secure
putenv('SMTP_HOST=ssl0.ovh.net');
putenv('SMTP_PORT=465');
putenv('SMTP_SECURE=true');
putenv('SMTP_USER=contact@divaeasy.com');
putenv('SMTP_PASS=your-secure-password-here');
putenv('CONTACT_EMAIL=contact@divaeasy.com');
?>
```

Then in `api/send-email.php`, add at the top (after `<?php`):
```php
if (file_exists(__DIR__ . '/../.env.php')) {
    require __DIR__ . '/../.env.php';
}
```

**Option B: Using OVH Control Panel (Environment Variables)**
- Log into OVH Control Panel > Hosting > Environment variables
- Add each variable as required

### Step 4: Update Frontend for Production

In `.env.local`, change:
```env
VITE_API_ENDPOINT=https://your-domain.com/api/send-email.php
```

**Important:** Build the dist folder again after changing the endpoint
```bash
npm run build
npm run preview  # Optional: preview the build locally
```

Then upload the new `/dist` folder to OVH.

## 🧪 Test Production Setup

1. Visit your OVH domain contact page
2. Fill out and submit the contact form
3. Check:
   - Email received by company (contact@divaeasy.com)
   - Confirmation email received by user

## 📧 How the Email System Works

1. **User submits form** → React sends POST request to `/api/send-email.php`
2. **PHP validates** → Checks all required fields
3. **PHPMailer connects** → Uses OVH SMTP with credentials
4. **Two emails sent:**
   - **Company email**: Full inquiry details
   - **User email**: Confirmation message
5. **Response sent** → Form shows success or error message

## 🔒 Security Best Practices on OVH

✅ **Implemented:**
- Email validation
- Required field validation
- CORS headers for requests
- Error handling without exposing secrets
- .env.php with restricted permissions

✅ **Recommended:**
- Protect `.env.php`: Set permissions to 600
- Use app password instead of main password
- Enable HTTPS on your domain
- Monitor email volume

## 🐛 Troubleshooting

### "Failed to load autoload.php"
- PHPMailer not installed
- Check vendor/autoload.php exists on your server
- Use FTP to verify the directory structure

### "Authentication failed" on OVH Server
- Verify `SMTP_USER` is correct (full email address)
- Check `SMTP_PASS` is correct
- Ensure OVH SMTP is accessible on port 465
- Try using app password from OVH webmail

### "SMTP connection timeout"
- Firewall may be blocking port 465
- Try port 587 instead (TLS):
  ```env
  SMTP_PORT=587
  SMTP_SECURE=false
  ```

### "Email sent OK but no delivery"
- Check email isn't caught in spam filter
- Verify sender email matches SMTP_USER
- Add SPF/DKIM records for your domain in OVH DNS

### PHP Error: "Class not found: PHPMailer"
- Make sure you included `require_once __DIR__ . '/../vendor/autoload.php';`
- Verify vendor folder path is correct
- Check file permissions

### Form shows "Erreur lors de l'envoi"
- Check browser console for error details
- Verify API endpoint URL in `.env.local`
- Check VITE_API_ENDPOINT is correct for your environment

## 📚 References

- [PHPMailer Documentation](https://github.com/PHPMailer/PHPMailer/wiki)
- [OVH Email Configuration](https://docs.ovh.com/gb/en/emails/)
- [OVH SMTP Configuration](https://docs.ovh.com/gb/en/emails-legacy/smtp-configuration/)
- [PHP Environment Variables](https://www.php.net/manual/en/function.putenv.php)

## 📝 Summary: Development vs Production

| Aspect | Local Dev | OVH Production |
|--------|-----------|----------------|
| **API Endpoint** | http://localhost:8000/api/send-email.php | https://your-domain.com/api/send-email.php |
| **PHP Server** | Built-in PHP server | OVH's PHP |
| **PHPMailer** | via `composer install` or manual | Manual upload via FTP |
| **Config** | `.env.local` | `.env.php` or OVH panel |
| **Testing** | `php -S localhost:8000` | Direct usage |
