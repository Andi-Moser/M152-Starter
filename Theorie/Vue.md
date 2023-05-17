## VueJS ##

### Grundprinzip

Vue ist ein reaktives Framework. Doch was bedeutet dies? Wenn man mit Vue arbeitet, schreibt man den Code nicht mehr
in Ausführungsreihenfolge, von oben nach unten. Man definiert dagegen seine Variablen und Funktionen und verknüpft diese
miteinander.

Man kann es sich so etwa wie Excel vorstellen. Wenn man in einem Feld eine Formel eingibt muss man auch nicht definieren,
wann diese Formel ausgeführt wird. Excel erkennt selbst, wenn ein Wert in einer abhängigen Spalte geändert wurde und
führt dann die Formel erneut aus.

### Das `ref` Element

Das Kernstück von Vue sind `ref` Elemente oder Variablen:

```javascript
const wert = ref('initialwert')
```

Dies ist eine reaktive Variable. Wird diese geändert so merkt Vue dies und aktualisiert die Abhängigkeiten selbst.

> Doch wie kann man diese Variable ändern? Sie ist doch eine Konstante (`const`)?
> 
> Will man im Javascript Code eine reaktive Variable ändern, muss man dies immer mit `.value` zu:
> 
> ```javascript
> wert.value = 'neuer Wert'
> ```
>
> Auch zum lesen muss man `.value` verwenden. Im `<template>` Part von Vue braucht man dies nicht zu schreiben, dort ergänzt
> Vue es automatisch für uns.

### Methoden

Natürlich bringt die ganze Reaktivität nichts, wenn wir nicht auf Eingaben vom User reagieren können. Dies wird jeweils in
normalen Funktionen gemacht, welche an ein Event im `<template>` gebunden werden:

```vue
<script setup>
const counter = ref(1)

function up() {
  counter.value = counter.value + 1
}
</script>
<template>
  {{ counter }}<br />
  <button @click="up">Hochzählen</button>
</template>
```

Ebenfalls ist es möglich Methoden bei der Ausgabe von Variablen oder in Attribut-Bindings (siehe weiter unten) zu verwenden:

```vue
<template>
  <button :class="getCssClass(value)">Aktueller Wert: {{ roundTo05(value) }}</button>
</template>
```

### Computed

Bisher haben wir, wenn wir an die Excel Analogie denken, nur einfache Zellen mit Werten via `ref` definiert und dynamisch aktualisiert.
Doch wie können wir nun einen weiteren Wert, basierend auf anderen Werten errechnen?

Hier kommt die `computed` Methode ins Spiel:

```javascript
const firstname = ref('Andi')
const lastname = ref('Moser')

const fullname = computed(() => {
    return firstname.value + ' ' + lastname.value
})
```

Mit `computed` erstellt man, ähnlich wie mit dem `ref` eine reaktive Variable, welche man aber nur lesen kann (Ebenfalls mit `.value`).

Doch anstelle eines Initialwertes übergibt man eine Funktion welche immer dann ausgeführt wird, wenn sich eine abhängige Variable geändert hat.

> Achtung! Damit `computed` funktioniert, müssen die verwendeten Variablen ebenfalls reaktiv sein. Folgendes Beispiel würde also nicht funktionieren:
> 
> ```javascript
> let value = 2
> const double = computed(() => {
>    return value * 2
> })
> ```

## Wert-Bindingings

Wie wir oben bereits gesehen haben, können wir im Template reaktive Variablen in geschweiften Klammern ausgeben:

```vue
<script setup>
  const name = ref('Andi Moser')
</script>
<template>
  Hallo, ich bin {{ name }}
</template>
```

## Attribut-Bindings

Ebenfalls können wir Tag-Attribute zu reaktiven Variablen binden:

```vue
<script setup>
  const className = ref('bg-red')
</script>
<template>
  <button :class="className">Klick mich!</button>
</template>
```

Jedes Attribut kann reaktiv gebunden werden, wenn man es mit einem `:` davor schreibt (z.B. `:href=` oder `:src=`).

## Model Bindings

Ein Spezialfall stellen Input Felder dar. Man könnte wie folgt ein Inputfeld programmieren, welches seinen Wert immer synchron mit
einer Variable in Vue hält:

```vue
<script setup>
  const value = ref()
</script>
<template>
  <input type="text" :value="value" @input="value=$event.target.value">
</template>
```

Dies wird jedoch mit der Zeit sehr mühsam und führt zu vielem doppeltem Code. Deshalb bietet Vue sogenannte Model Bindings an:

```vue
<script setup>
  const value = ref()
</script>
<template>
  <input type="text" v-model="value">
</template>
```

Mit `v-model` wird automatisch sichergestellt, dass der Wert im Inputfeld immer jenem der Variable entspricht. Egal welche Seite (Variable oder Inputfeld)
sich ändert, es bleibt immer synchron.

### Watcher

Mit einem Watcher kann eine reaktive Variable überwacht werden und eine Funktion ausgeführt werden wenn sich der Wert der Variable ändert.

So kann man z.B. immer wenn die Daten sich ändern diese in den LocalStorage speichern:

```javascript
const data = ref([])
watch(data, (newValue, oldValue) => {
    window.localStorage.setItem('data', JSON.stringify(newValue))
})
```

> Was ist der Unterschied zu `computed`?
> 
> Computed darf keine Nebeneffekte haben. Damit Vue die Ausführung von `computed` optimieren kann, wird jedes `computed` bei der Erstellung einmal ausgeführt.
> Vue merkt sich dann, welche Variablen darin verwendet werden und führt es fortan immer dann aus, wenn sich eine dieser Variablen ändert.
> 
> Würde in einem solchen Computed ein Nebeneffekt entstehen würde dieser immer zu Begin einmal ausgeführt - beim Beispiel mit dem Speichern in LocalStorage würde
> zu Beginn immer ein leeres Array in den LocalStorage geschrieben werden.
> 
> Aus diesem Grund muss man Vue manuell angeben welche Variable man überwachen will. Beim `computed` findet Vue es selbst hinaus.

### Template direktiven

Vue stellt verschiedene Template Direktiven (`v-`) zur Verfügung.

Mit `v-if` können wir steuern, ob ein Element angezeigt wird oder nicht:

```vue
<script setup>
  const showElement = ref(true)
</script>
<template>
  <button v-if="showElement">Klick mich</button>
</template>
```

Mit `v-for` können wir ein Element für jeden Eintrag in einem Array wiederholen lassen:

```vue
<script setup>
  const todos = ref([
      'Einkaufen', 'Hausaufgaben', 'Pult aufräumen'
  ])
</script>
<template>
  <ul>
    <li v-for="todo in todos">{{ todo }}</li>
  </ul>
</template>
```