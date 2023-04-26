<script lang="ts"> 
</script>

<section class="main">
    <h1>Validador de CPF</h1>
    <p>Digite um CPF e clique em "Verificar CPF" para verificar se ele éválidoou invalido</p>

    <input
        class="input"
        maxlength="14"
        autocomplete="off"
        required
        placeholder=" Digite o CPF"
    />

    <span class="resultadoDaValidação" data-resultadoDaValidação />

    <button class="verificacao">Verificar CPF</button>
</section>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Golos+Text:wght@500&display=swap");

    * {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        background: rgb(174, 171, 177);
        font-family: "Golos Text";
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        flex-direction: column;
    }

    p {
        font-size: 1.15em;
        margin-top: 15px;
    }

    .input {
        margin-top: 25px;
        width: 200px;
        height: 35px;
        border-radius: 5px;
    }

    .verificacao {
        width: 100px;
        height: 40px;
        margin-top: 20px;
        border-radius: 5px;
        color: #ffff;
        background: rgb(87, 95, 172);
    }

    span {
        font-size: 20px;
        margin-top: 10px;
    }
</style>
