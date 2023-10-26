/* Для создания бесконечной ленты с фотографиями с использованием Unsplash API, выполните следующие шаги:
Зарегистрируйтесь на Unsplash:
Перейдите на веб-сайт Unsplash (https://unsplash.com/).
Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
Войдите в свой аккаунт Unsplash.
Создайте приложение:
После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
Нажмите "New Application" (Новое приложение).
Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете использовать http://localhost для тестового сайта).
После заполнения информации, нажмите "Create Application" (Создать приложение).
Получите API-ключ: */

/* После создания приложения, вы получите API-ключ. Этот ключ будет отображаться в вашей панели управления приложением.
API-ключ представляет собой строку вида YOUR_ACCESS_KEY. Скопируйте его.
Измените код HTML и JavaScript:
Откройте вашу HTML-страницу в текстовом редакторе или интегрированной среде разработки.
Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный API-ключ.
Переходим к заданию
Создайте HTML-страницу с следующей структурой: */

/* Создайте контейнер в HTML с идентификатором "photo-container".
Запросите фотографии с Unsplash, используя их API. Задайте количество фотографий и номер страницы.
Отобразите полученные фотографии в созданном контейнере.
При прокрутке страницы до конца, автоматически загружайте и отображайте следующую партию фотографий.
Увеличивайте номер страницы после каждой загрузки.
При ошибке загрузки, выводите сообщение в консоли.
При первом открытии страницы, отображайте первую партию фотографий. */

//Access Key: xUN3fRO_GMYTk5aJcNFVgjva_N9LAkTN-NJuPnuiN6k

//Secret key: bkbi0mHtihr_GQ4SJLTgvne87Yfn85TrXbpllmzikKk