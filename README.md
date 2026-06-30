# Sharjeel Shaukat — Portfolio (HTML / CSS / JS / PHP)

Static portfolio site with a small PHP contact handler.

## Files
- `index.html` — markup
- `styles.css` — design system & layout
- `script.js` — nav, scroll-spy, reveal animations, AJAX form submit
- `contact.php` — receives form posts, logs to `messages.log`, optionally emails
- `assets/profile.png` — profile photo

## Run locally
Any PHP-enabled server works. Easiest:
```
php -S localhost:8000
```
Then open http://localhost:8000

Or deploy to any shared host with PHP (cPanel, Hostinger, InfinityFree, etc.).
Update the `$TO` email in `contact.php`.