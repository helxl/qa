# هيكل المشروع

```
qa/
├── frontend/                 # تطبيق الويب والموبايل
│   ├── web/                 # تطبيق الويب
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── styles/
│   │   │   └── utils/
│   │   ├── public/
│   │   └── package.json
│   └── mobile/              # تطبيق الموبايل
│
├── backend/                  # API والخدمات
│   ├── api/
│   │   ├── auth/            # المصادقة
│   │   ├── analysis/        # تحليل القضايا
│   │   ├── documents/       # إدارة المستندات
│   │   ├── laws/            # إدارة القوانين
│   │   └── cases/           # إدارة القضايا
│   ├── models/              # نماذج الذكاء الاصطناعي
│   ├── database/            # قاعدة البيانات
│   ├── config/              # الإعدادات
│   └── requirements.txt
│
├── database/                # قاعدة البيانات
│   ├── migrations/
│   ├── seeds/
│   └── schemas/
│
├── docs/                    # التوثيق
│   ├── api/
│   ├── architecture/
│   └── guides/
│
├── tests/                   # الاختبارات
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .github/
│   └── workflows/           # CI/CD
│
├── docker-compose.yml
├── Dockerfile
├── README.md
└── PROJECT_STRUCTURE.md
```

## وصف المجلدات

### Frontend
- **Web**: تطبيق ويب React/Next.js للواجهة الأمامية
- **Mobile**: تطبيق موبايل React Native/Flutter

### Backend
- **API**: نقاط النهاية RESTful
- **Models**: نماذج AI/ML للتحليل
- **Database**: طبقة الوصول للبيانات
- **Config**: إعدادات التطبيق

### Database
- **Migrations**: إدارة تطور قاعدة البيانات
- **Seeds**: بيانات ��ولية للقوانين والأحكام
- **Schemas**: هياكل البيانات

### Tests
- **Unit**: اختبارات الوحدات
- **Integration**: اختبارات التكامل
- **E2E**: اختبارات المسار الكامل
