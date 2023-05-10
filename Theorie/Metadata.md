## Metadaten ##

Ein wichtiger Punkt bei dem Erstellen von Websites ist die Indexierung.

Damit Suchmaschinen wie Google oder soziale Netzwerke wie LinkedIn unseren Inhalt korrekt
kategorisieren und darstellen können, gibt es sogenannte Meta Tags.

Diese Tags beschreiben den Inhalt unserer Seite für eine automatisierte Auswertung. Neben
den Standard-Optionen wie `title`, `description` und `keywords` gibt es ebenfalls das Open Graph Protocol
und den JSON-LD Standard.

### Standard Tags ###

Die Standard Tags werden hauptsächlich für das Suchmaschinenmarketing verwendet.

```html
<head>
    <title>Titel der Seite</title>
    <meta name="description" content="Beschreibung des Seiteninhalts">
    <meta name="keywords" content="Keywords durch Abstand getrennt">
</head>
```

### Open Graph Protocol ###

Das Open Graph Protocol wurde ursprünglich von Facebook entwickelt um die Inhalt auf geteilten
Websiten besser zu kategorisieren. Unterdessen verwenden viele soziale Netzwerke ebenfalls dieses
Protokoll.

Mit ihm ist es möglich, mehr Meta-Informationen über die Seite anzugeben und z.B. zu definieren,
welches Bild beim Teilen angezeigt werden soll.

Eine simple Integration von OG-Tags sieht wie folgt aus:
```html
<meta property="og:title" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
```

OGP definiert jedoch noch einige Tags und Kategorien mehr. Die komplette Dokumentation findet
sich [hier](https://ogp.me/).

### JSON-LD ##

Ein weiteres verbreitetes Protokoll welches hauptsächlich von Google genutzt wird ist JSON-LD.

Es verwendet statt einzelnen Meta Tags ein JSON Format welches in einem Script Tag angegeben ist.
Dank des Aufbau in JSON ist es möglich auch komplexere Daten wie z.B. ein Rezept strukturiert anzugeben:

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": "Aloha Chica",
    "image": [
        "https://www.trojkavodka.com/storage/app/uploads/public/631/9b8/aa5/thumb_66_1000_1000_0_0_auto.png",
        "https://www.trojkavodka.com/storage/app/uploads/public/631/9b8/aa5/thumb_66_1000_750_0_0_auto.png",
        "https://www.trojkavodka.com/storage/app/uploads/public/631/9b8/aa5/thumb_66_1000_562_0_0_auto.png"
    ],
    "author": {
        "@type": "Organization",
        "name": "Trojkavodka",
        "url": "https://www.trojkavodka.com"
    },
    "datePublished": "2022-09-08",
    "description": "Aloha Chica – karibischer Genuss direkt in deinem Glas! Der hellblaue Drink mit Ananas, Limetten und Tonic Water versetzt dich direkt an einen Strand mit weissem Sand und Blick aufs türkisblaue Wasser.&amp;nbsp;",
    "prepTime": "PT5M",
    "cookTime": "PT0M",
    "totalTime": "PT5M",
    "keywords": "Aloha Chica, Vodka Drink, Trojka Drink, fruchtiger Drink",
    "recipeYield": "1 serving",
    "recipeCategory": "Drink",
    "recipeIngredient": [
        "VIEL EIS",
        "4 CL TROJKA ALOHA",
        "1–2 CL FRISCHER LIMETTENSAFT",
        "8 CL TONIC WATER",
        "1 ANANASSCHNITZ",
        "2–3 ANANASBLÄTTER"
    ],
    "recipeInstructions": [
        {
            "@type": "HowToStep",
            "text": "Viel Eis in ein Longdrink-Glas geben und Trojka Aloha dazugiessen. "
        }
        , {
            "@type": "HowToStep",
            "text": "Frischen Limettensaft hinzugeben und anschliessend mit Tonic Water auffüllen. "
        }
        , {
            "@type": "HowToStep",
            "text": "Den Drink mit einem Ananasschnitz und 2–3 Ananasblättern garnieren."
        }
    ],
    "video": {
        "@type": "VideoObject",
        "name": "Aloha Chica",
        "description": "Aloha Chica – karibischer Genuss direkt in deinem Glas! Der hellblaue Drink mit Ananas, Limetten und Tonic Water versetzt dich direkt an einen Strand mit weissem Sand und Blick aufs türkisblaue Wasser.&amp;nbsp;",
        "thumbnailUrl": [
            "https://www.trojkavodka.com/storage/app/uploads/public/631/f22/a52/thumb_247_1000_0_0_0_auto.jpg"
        ],
        "contentUrl": "https://youtu.be/DwPY2POcD5M",
        "uploadDate": "2022-09-08"
    }
}
</script>
```

Auch hier gibt es wieder eine vielzahl von Typen welche definiert werden können.
Einige Interessante Beispiele finden sich im [JSON-LD Playground](https://json-ld.org/playground/)