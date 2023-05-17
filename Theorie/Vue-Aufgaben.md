## Vue Aufgaben

Als Vorbereitung auf die Leistungsarbeit möchten wir eine kleine Budget App machen.

Diese App soll Einnahmen sowie Ausgaben auflisten und den totalen Kontostand angeben. Als Erweiterung können
Einträge jeweils noch Kategorien zugeordnet werden.

Sie haben jeweils pro Teilaufgabe eine bestimmte Zeit zur Verfügung bevor wir die Teilaufgabe miteinander besprechen.

### Start-Komponente

Verwenden Sie folgende Start-Komponente:

```vue
<script setup>
import { ref } from "vue";

const log = ref([
    {
        id: 1,
        text: 'Startsaldo',
        value: 1500
    },
    {
        id: 2,
        text: 'Bus-Abo',
        value: -79
    }
])

const currentId = ref(2)
</script>

<template>

</template>

<style lang="scss">
</style>
```

Das wichtige beim Start-Template ist die Struktur der Daten. Alle unsere Einträge sind in einem reaktiven `log` Array gespeichert.

Jeder Eintrag hat die Wete `id`, `text` und `value`. Die ID wird verwendet um Einträge später zu ändern oder zu löschen.

### Aufgabe 1 - Darstellung

Erweitern Sie als erstes das Log um einige Einträge mehr.

Stellen Sie dann alle Log Einträge in einer Tabelle dar. Verwenden Sie verschiedene Farben um darzustellen ob ein Eintrag ein Ein- oder Ausgang ist.

### Aufgabe 2 - Neue Einträge hinzufügen

Erstellen Sie ein Formular mit welchem neue Einträge hinzugefügt werden können. Wir benötigen dafür zwei `input` Felder (Text + Betrag) sowie ein `button`.

Wird der Button gedrückt so wird ein neuer Eintrag mit der nächst höheren ID hinzugefügt.

### Aufgabe 3 - Elemente löschen

Erstellen Sie pro Zeile einen Button welcher Einträge wieder aus der Liste löscht. Implementieren Sie die Funktion zum löschen.

> Tipp: Um den Eintrag zu löschen, können wir eine `deleteLog(id) { ... }` Funktion erstellen. Danach Filtern wird das Array sodass der Eintrag
> mit der gelöschten ID nicht mehr vorhanden ist.

### Aufgabe 4 - Summen

Zeigen Sie bei der Tabelle zuunters den aktuellen Kontostand an. Stellen Sie ebenfalls die Summe aller Ein- und Ausgaben separat dar.

> Tipp: Hierfür eignet sich `computed`!

### Aufgabe 5 - Modal

Damit das Formular zum Hinzufügen von Einträgen nicht immer sichtbar ist, lagern Sie es in ein Modal aus.

> Tipp: Um ein HTML Element in Vue zu erhalten, definieren Sie eine `ref` Variable und setzten Sie beim HTML Element den `ref` Parameter auf diese Variable:
> 
> ```vue
> <script setup>
>   const dialogElement = ref()
> </script>
> <template>
>   <dialog ref="dialogElement"></dialog>
> </template>
> ```