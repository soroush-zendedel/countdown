# شمارش معکوس — تاریخ جهانی اعداد

> «خداوند همیشه به زبان ریاضی سخن می‌گوید.» — افلاطون

پروژه‌ی **شمارش معکوس** تلاشی است برای بازخوانی سیر پیدایش و تحول اعداد، شمارش، و اندیشه‌های ریاضی در طول تاریخ بشر.

> بخش اعظم این کتاب، ترجمه و بازنویسی منتخبی از اثر برجسته‌ی **The Universal History of Numbers** نوشته‌ی *Georges Ifrah* است، 
> همراه با ویرایش‌ها، توضیحات و افزوده‌های پژوهشی برای خوانندگان فارسی‌زبان.

---

## 🧭 درباره‌ی پروژه

<p dir="rtl" align="right">

در هر فصل از این کتاب، به بخشی از تاریخ جهانی ریاضیات پرداخته می‌شود:

<ul dir="rtl">
  <li>خاستگاه شمارش در تمدن‌های باستانی</li>
  <li>تولد عدد و نمادگذاری عددی</li>
  <li>ریاضیات در میان‌رودان، مصر، هند، چین، یونان و ایران</li>
  <li>تأثیر ریاضیات اسلامی بر اروپا و دگرگونی اندیشه‌های عددی </li>
</ul>

</p>

هدف این پروژه، فراهم کردن یک منبع آزاد و خوانا برای علاقه‌مندان به تاریخ ریاضیات است.

این کتاب به‌صورت **سایت ایستا (Static Site)** با استفاده از ابزار **MkDocs** ساخته شده و برای مطالعه‌ی آزاد در گیت‌هاب منتشر می‌شود.

---

## 🛠️ ساخت پروژه محلی

برای پیش‌نمایش محلی، ابتدا وابستگی‌ها را نصب کنید.

**Linux و macOS**:

```bash
git clone https://github.com/soroush-zendedel/countdown.git
cd countdown
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
mkdocs serve
```

**Windows PowerShell**:

```powershell
git clone https://github.com/soroush-zendedel/countdown.git
cd countdown
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\mkdocs.exe serve
```

سپس آدرس زیر را در مرورگر باز کنید:

```
http://127.0.0.1:8000
```

---

## 🌐 انتشار در GitHub Pages

برای مشارکت، مخزن را Fork کنید، تغییرات را در یک شاخهٔ جداگانه انجام دهید و Pull Request خود را به شاخهٔ `main` بفرستید.

پس از ادغام تغییرات در `main`، نگه‌دارندهٔ سایت باید از ریشهٔ مخزن و با محیط مجازی فعال، سایت را بسازد و منتشر کند:

```bash
mkdocs gh-deploy
```

در Windows PowerShell، اگر محیط مجازی را فعال نکرده‌اید، اجرا کنید:

```powershell
.\.venv\Scripts\mkdocs.exe gh-deploy
```

GitHub Pages از شاخهٔ `gh-pages` منتشر می‌شود؛ ادغام Pull Request به‌تنهایی سایت را به‌روز نمی‌کند.

**آدرس نهایی**:

[https://soroush-zendedel.github.io/countdown/](https://soroush-zendedel.github.io/countdown/)

---

## 📄 مجوز

این پروژه تحت مجوز [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE) منتشر می‌شود. هنگام بازنشر یا اقتباس، باید به پدیدآورنده اعتبار بدهید، پیوند مجوز را بیاورید و تغییرات انجام‌شده را مشخص کنید.

---

> «قَدْ جَعَلَ اللّٰهُ لِکُلِّ شَیْءٍ قَدْراً» — خداوند برای هر چیز مقدار و‌ اندازه‌ای قرار داده است. (قرآن کریم)

