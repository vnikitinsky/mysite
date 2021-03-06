---
title: "Проектирование информационной архитектуры (ИА) мобильных приложений"
description: "Любое мобильное приложение — это контент, на котором оно основано, и то, как оно организовано. Ваши тексты, изображения, видео, аудио и…"
date: "2021-07-04T15:11:34.811Z"
categories: []
published: true
canonical_link: https://medium.com/@vnikitinsky/%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B0%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D1%83%D1%80%D1%8B-%D0%B8%D0%B0-%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-e891ae271faa
redirect_from:
  - /проектирование-информационной-архитектуры-иа-мобильных-приложений-e891ae271faa
---

Любое мобильное приложение — это контент, на котором оно основано, и то, как оно организовано. Ваши тексты, изображения, видео, аудио и т.д. могут быть потрясающими сами по себе, но если вы сделаете слишком сложным для пользователя доступ к ним, ваше приложение обречено. Итак, если вы хотите создать идеальный пользовательский интерфейс, вам нужно хорошо подумать о том, как вы организуете информацию в своем приложении, чтобы сделать ее удобной и приятной для пользователя, то есть вы не должны недооценивать важность мобильной информационной архитектуры.

undefined

### Что такое информационная архитектура?

Перво-наперво. Информационная архитектура любого приложения или веб-сайта — это, по сути, структура содержащейся в нем информации; это структура содержания вашего приложения. Основная цель дизайнера, работающего над IA, — сделать навигацию по ней простой и интуитивно понятной. Этот процесс очень похож на то, как архитекторы вкладывают свое время и усилия в создание чертежей и выяснение, где должны быть расположены основные элементы здания, чтобы они были легко доступны для жителей.

**При создании IA необходимо придерживаться двух основных принципов:**

-   она должна быть легкой для понимания и навигации;
-   она должна быть легко масштабируемой (т. е. должно быть легко добавлять новые функции в приложение после его выпуска).

### IA мобильных приложений: что вы должны знать

Причина, по которой нам нужно говорить о различиях в IA мобильных приложений и настольных приложений или веб-сайтов, довольно очевидна: использование смартфона качественно отличается от использования ПК. **Вы должны принять во внимание две основные вещи:**

-   **Особенности устройства**. Прежде всего, взаимодействие пользователя со смартфоном основано на смахивании и касании, а не на кликах и сочетаниях клавиш. Экран значительно меньше, поэтому на нем может поместиться меньше элементов. Кроме того, мобильное интернет-соединение может быть не таким высокоскоростным, как домашнее (в зависимости от страны, местоположения пользователя и качества услуг оператора сотовой связи), поэтому мобильные приложения следует оптимизировать с точки зрения времени загрузки.
-   **Обстоятельства**. Люди используют свои смартфоны, когда идут из пункта А в пункт Б или едут в общественном транспорте. Таким образом, вы должны принять во внимание все отвлекающие факторы, с которыми могут бороться ваши пользователи, включая различные условия просмотра при использовании приложения.

Все эти различия требуют, чтобы дизайнеры IA переосмыслили, как контент должен быть представлен в мобильном приложении, чтобы обеспечить беспроблемный UX.

### 6 основных шаблонов мобильной информационной архитектуры

Нет необходимости изобретать велосипед: существует множество шаблонов IA, которые могут облегчить вам разработку базовой структуры вашего приложения. Единственное, над чем нужно хорошенько подумать, это какие паттерны выбрать.

Прежде чем мы начнем, примите во внимание, что вы не должны выбирать только один шаблон информационной архитектуры мобильного приложения и использовать его во всем приложении. Вы можете выбрать несколько и комбинировать их как хотите. Однако имейте в виду, что вам нужно выбрать родительский паттерн, а затем вы можете использовать другие для подразделов.

#### 1\. Иерархия

Этот паттерн используется для веб-сайтов; Однако он нашел свое применение и в дизайне мобильных приложений. По сути, вы создаете одну индексную страницу, которая имеет ссылки на другие страницы, которые, в свою очередь, также могут содержать ссылки на другие подстраницы.

**Для чего его следует и не следует использовать**

Этот паттерн хорошо подходит для мобильных приложений, которые должны иметь ту же структуру, что и веб-сайты для настольных компьютеров. Однако, если в результате использования этого шаблона вы получите многогранную структуру навигации, это может быть неудобно для использования на маленьких экранах. Так что в этом случае лучше пересмотреть свой выбор и выбрать другой шаблон с менее сложной навигацией.

undefined

#### 2\. Hub & Spoke

Этот шаблон используется по умолчанию для приложений iPhone. Здесь у вас есть одна индексная страница (так называемый хаб) со спицами для перехода. Чтобы переключиться на другой луч, пользователи должны сначала вернуться к концентратору. Таким образом, этот шаблон побуждает пользователей сосредоточиться на одной задаче за раз.

**Для чего его следует и не следует использовать**

Этот шаблон хорош для многофункциональных приложений, в которых каждый инструмент или функция имеет собственное назначение и внутреннюю навигацию. Однако если ваше приложение ориентировано на пользователей, которые хотят выполнять несколько задач одновременно, этот шаблон не сработает.

undefined

#### 3\. Матрешка

Это линейный шаблон, который позволяет пользователям переходить от страницы индекса с общим обзором контента к страницам с более подробной информацией. Поскольку он линейный, навигация воспринимается как понятная, поэтому пользователи с меньшей вероятностью потеряются в контенте приложения.

**Для чего его следует и не следует использовать**

Он нашел широкое применение на Android. Шаблон “Матрешка” — хороший выбор для приложений, которые сосредоточены на одной конкретной теме или паре тесно связанных. Однако учтите, что переключение между разделами может быть слишком медленным, если в вашем IA много уровней.

undefined

#### 4\. Просмотр с вкладками

Этот шаблон информационной архитектуры мобильного приложения будет чрезвычайно знаком любому пользователю, поскольку он напоминает способ организации вкладок в браузерах для настольных компьютеров. Контент размещен в разных разделах, и пользователи могут переключаться между ними с помощью панели инструментов.

**Для чего его следует и не следует использовать**

Этот шаблон подходит для приложений, которые созданы в качестве инструментов (например, для поиска и сравнения продуктов из многих категорий и подкатегорий; отличным примером является Amazon с их тоннами товаров и доступной навигацией с вкладками для их просмотра) и для поощрения пользователя к многозадачности. Однако обратите внимание на сложность вашего IA с этим шаблоном — вы должны сделать его как можно более простым, чтобы сделать его удобным для пользователя.

undefined

#### 5\. Панель управления

Эта структура имеет различные элементы, которые отображают часть информации (например, контент или инструменты) на странице индекса. У него есть одно существенное преимущество: он позволяет пользователям получать самую важную информацию, анализировать и расставлять приоритеты с первого взгляда.

**Для чего его следует и не следует использовать**

Это хорошо подходит для приложений, которые созданы для использования на планшете, а не на смартфоне. Он подходит для приложений, которые представляют собой многофункциональные инструменты, основанные на содержании. Однако довольно легко перегрузить индексную страницу элементами и в результате заставить ваших пользователей почувствовать себя потерянными в море информации. Итак, вам следует обратить особое внимание на тестирование того, как пользователи взаимодействуют с этим интерфейсом, и использовать их отзывы для улучшения UX.

undefined

#### 6\. Просмотр с фильтрами

Отфильтрованное представление позволяет пользователям переключаться между альтернативными представлениями, фильтруя просматриваемый контент. Этот шаблон отлично подходит для предоставления пользователям свободы выбора, как самостоятельно исследовать контент.

**Для чего его следует и не следует использовать**

Этот шаблон — отличный выбор для приложений, которые основаны на отображении огромных объемов контента (изображений, видео и т.д.). Однако не следует перегружать его слишком большим количеством фильтров, так как это затруднит их отображение на маленьком экране смартфона.

undefined

### 6 советов по созданию хорошей мобильной информационной архитектуры

#### 1\. Сначала создайте инвентарь контента

Прежде чем вы даже начнете обдумывать, какой шаблон выбрать для вашего IA, вам нужно знать, из каких элементов будет состоять ваша IA. Итак, мы предлагаем составить список всего контента, который должен быть в приложении: все заголовки, метаэлементы, аудиофайлы, видео, тексты, документы и т.д. Это поможет вам сгруппировать компоненты, расставить приоритеты и получить избавиться от ненужного.

#### 2\. Не забывайте о каркасе

Каркасное построение означает создание схематических изображений того, как будет выглядеть приложение. Он не сосредоточен на деталях дизайна, а скорее на том, как можно организовать элементы IA. Каркасное построение используется для визуализации идей того, как может выглядеть определенная страница или экран, и полезно для представления и обсуждения этих идей с другими заинтересованными сторонами.

#### 3\. Сохраняйте простоту

Это, пожалуй, самый важный совет при разработке мобильного приложения IA. Поскольку экраны смартфонов намного меньше, чем экраны планшетов или настольных компьютеров, вам нужно потратить некоторое время на определение приоритетов компонентов контента и включить только те, которые абсолютно необходимы. **Помните**: чем меньше элементов вы включите, тем лучше.

**Вот несколько советов, которые помогут сделать вашу IA проще:**

-   уменьшите количество ссылок до менее 10
-   минимизируйте количество уровней в конструкции
-   избавьтесь от страниц с небольшим содержанием или без содержания: каждая страница должна иметь смысл
-   убедитесь, что ваши ссылки и пункты меню понятны, но не слишком длинные

#### 4\. Установить приоритеты

Как определить, какие компоненты должны быть расположены «ближе» к пользователю (с меньшим количеством нажатий)? Полагайтесь на спрос на каждый компонент: чем популярнее определенная функция или элемент контента, тем проще необходимо добираться до них.

#### 5\. Положитесь на тестирование и обратную связь

Лучший способ узнать, будет ли разработанная вами IA удобной для пользователя, — это найти ваших потенциальных пользователей, попросить их использовать приложение и получить их отзывы. Это важно сделать до того, как вы выпустите приложение, и продолжайте делать это после запуска.

#### 6\. Регулярно пересматривайте свой IA

На это есть две причины. Во-первых, все может устареть: даже если ваш IA сейчас обеспечивает идеальный пользовательский интерфейс, через пару лет он может потерять удобство по сравнению с вашими конкурентами. Поэтому важно идти в ногу с последними тенденциями в области дизайна систем.

Вторая причина заключается в том, что даже самое тщательное тестирование не может гарантировать, что UX будет безупречным для ваших пользователей на практике. Итак, соберите отзывы и используйте их для проверки и изменения IA.

### Заключение

То, как вы организовываете контент своего приложения, является одним из основных факторов его будущего успеха. Если вы упустите этот этап разработки, вы рискуете создать приложение, которое не сможет обеспечить пользовательский интерфейс, заставляющий людей возвращаться к нему снова и снова.

Итак, выбирайте паттерны мобильного IA с умом в соответствии с вашими конкретными потребностями и не бойтесь их комбинировать. Кроме того, имейте в виду, что вам нужно, чтобы ваша IA была как можно более простой и понятной, и убедитесь, что вы тестируете ее и правильно используете отзывы клиентов.

---

[_Original article_](https://applikeysolutions.com/blog/designing-the-information-architecture-ia-of-mobile-apps) _by: Applikey Team_
