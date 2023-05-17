<template>
    <ul class="people">
        <li v-for="index in 10" :key="index" class="person">
            <div class="person__image">
                <img src="https://source.unsplash.com/300x300/?portrait" />
            </div>
            <div class="person__inner">
                <div class="person__title">
                    Andi Moser
                </div>
                <div class="person__text">
                    Web Entwickler
                </div>
                <button class="person__button">Kontaktieren</button>
            </div>
        </li>
    </ul>

    <div class="overlay">
    </div>
</template>

<style lang="scss">
.people {
    /* Desktop Styles */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin: 0;
    padding: 20px;
    list-style-type: none;

    @media all and (max-width: 800px) {
        /* Tablet Styles */
        grid-template-columns: 1fr 1fr;
    }
    @media all and (max-width: 500px) {
        /* Mobile Styles */
        padding: 5px;
        grid-template-columns: 1fr;
    }

    .person {
        &__image {
            display: flex;
            justify-content: center;
            img {
                border-radius: 50%;
                width: 80%;
                
                @media all and (max-width: 500px) {
                    width: 100%;
                }
            }
        }

        &__inner {
            text-align: center;
        }

        &__title {
            font-size: 2rem;
            font-weight: bold;
        }

        &__button {
            background-color: teal;
            border-radius: 5px;
            color: white;
            padding: 10px;
            border: none;
            margin: 30px 0 0;
        }

        margin-bottom: 40px;
        
        @media all and (max-width: 800px) {
            display: flex;

            &__image {
                display: block;
                width: 30%;
                img {
                    width: 100%;
                    height: auto;
                }
            }
            &__inner {
                width: 70%;
            }
        }

        @media all and (max-width: 500px) {
            flex-direction: column;
            padding: 0 10px;
            /*display: block;*/
            &__image, &__inner {
                width: 100%;
            }
        }
    }
}
.overlay {
    position: fixed;
    top: 67px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 67px);
    background-color: rgba(0,0,0,0.5);
}

.btn {}

.button {}

.button-danger {}

.button_inactive {}

.button.inactive {}
</style>