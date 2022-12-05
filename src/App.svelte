<script>
  import Brownian from "./lib/brownian.svelte";
  import Header from "./lib/header.svelte";
  import Footer from "./lib/footer.svelte";
  import Menu from "./lib/menu.svelte";
  import Main from "./lib/main.svelte";
  import ContextMenu from "./lib/contextMenu.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet"> 
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500" rel="stylesheet"> 
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600" rel="stylesheet"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div id="content">
  <Brownian count={9} />
  <Menu />
  <ContextMenu />
  <div id="center">
    <Header />
    <Main />
  </div>
  <Footer />
</div>

<style>
  #content {
    display: flex;
    flex-direction: column;
    min-height: 100vh
  }
  
  #center {
    flex: 1;
    width: 60%;
    margin: auto;
  }
  @media only screen and (max-width: 1000px) {
    #center {
      width: 90%;
    }
  }
</style>
