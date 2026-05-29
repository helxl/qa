# Render Deployment Configuration

## خطوات النشر على Render

### 1. إنشاء حساب على Render
- اذهب إلى [render.com](https://render.com)
- سجل حساب جديد أو تسجيل الدخول

### 2. إنشاء Web Service جديد
- اضغط على "New +" 
- اختر "Web Service"
- اختر المشروع من GitHub
- أتصل حسابك على GitHub

### 3. إعدادات النشر

**الاسم:**
```
yemeni-legal-platform
```

**البيئة:**
```
Node
```

**الأوامر:**

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

### 4. متغيرات البيئة (Environment Variables)

أضف المتغيرات التالية في لوحة التحكم:

```
NODE_ENV=production
PORT=3000
JWT_SECRET=your_secure_jwt_secret_key_here
AI_API_KEY=your_api_key_here
```

### 5. خطة التسعير

**الخطة المجانية تشمل:**
- ✅ 750 ساعة شهرية من وقت التشغيل
- ✅ النوم تلقائي بعد 15 دقيقة عدم استخدام (في الخطة المجانية)
- ✅ 100 GB نقل بيانات شهري
- ✅ 0.5 CPU
- ✅ 512 MB RAM

**للحصول على أداء أفضل:**
- ترقية إلى خطة مدفوعة ($7-12/شهر)

### 6. النشر الآلي

- الخادم سينشر تلقائياً عند أي push إلى `main`
- يمكنك نشر يدوياً من لوحة التحكم

### 7. الوصول إلى التطبيق

بعد النشر الناجح:
```
URL: https://your-service-name.onrender.com
API: https://your-service-name.onrender.com/api
Health: https://your-service-name.onrender.com/api/health
```

## إضافة قاعدة بيانات PostgreSQL

### الخيار 1: PostgreSQL على Render (مدفوع)

1. اذهب إلى "Databases" في Render
2. أنشئ PostgreSQL جديد
3. انسخ DATABASE_URL
4. أضفها إلى متغيرات البيئة

### الخيار 2: استخدام خدمة مجانية أخرى

**Supabase** (مجاني + مدفوع):
- اذهب إلى [supabase.com](https://supabase.com)
- أنشئ مشروع جديد
- انسخ DATABASE_URL
- أضفها إلى Render

**Neon** (مجاني + مدفوع):
- اذهب إلى [neon.tech](https://neon.tech)
- أنشئ مشروع جديد
- انسخ DATABASE_URL
- أضفها إلى Render

## المشاكل الشائعة والحلول

### المشكلة: "Build Failed"
**الحل:**
- تحقق من `package.json` صحيح
- تأكد من أن `server.js` موجود
- تحقق من logs في Render

### المشكلة: التطبيق نائم (Spinning)
**الحل:**
- هذا سلوك طبيعي في الخطة المجانية
- لتجنبه: ترقية إلى خطة مدفوعة
- أو استخدم uptime monitor لإبقاءه مستيقظاً

### المشكلة: قاعدة البيانات لا تتصل
**الحل:**
- تأكد من DATABASE_URL صحيح
- تحقق من صلاحيات قاعدة البيانات
- تحقق من connection string

## Uptime Monitoring (اختياري)

للحفاظ على التطبيق مستيقظاً 24/7:

### استخدام UptimeRobot (مجاني):

1. اذهب إلى [uptimerobot.com](https://uptimerobot.com)
2. أنشئ حساب مجاني
3. أضف monitor جديد
4. أدخل URL: `https://your-service.onrender.com/api/health`
5. اختر "HTTP(s)"
6. ضع فترة 5 دقائق

هذا سيبقي التطبيق مستيقظاً عن طريق ping كل 5 دقائق.

## التطبيق الجاهز للنشر

✅ هذا المشروع مجهز بالفعل للنشر على Render:
- ✅ `Dockerfile` موجود
- ✅ `docker-compose.yml` موجود
- ✅ `server.js` معد
- ✅ `package.json` مكتمل
- ✅ `.env.example` جاهز

## الخطوات السريعة:

```bash
# 1. استنسخ المشروع
git clone https://github.com/helxl/qa.git
cd qa

# 2. ثبت المكتبات
npm install

# 3. أنشئ ملف .env
cp .env.example .env

# 4. اختبر محلياً
npm start

# 5. انشر على GitHub
git push origin main

# 6. انشر على Render من لوحة التحكم
```

## الدعم والمساعدة

- 📚 [Render Docs](https://docs.render.com/)
- 💬 [Render Community](https://community.render.com/)
- 🐛 [Report Issues](https://github.com/helxl/qa/issues)
