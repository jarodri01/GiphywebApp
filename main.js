(function () {
    function giphySearchEngine(keyword, limit) {
      return fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=h5nEbFf0nz3FmKUhFMFajDQpM6ew66XF&limit=${limit}`)
        .then(response => response.json());
    }
//h5nEbFf0nz3FmKUhFMFajDQpM6ew66XF// apikey 
//https://api.giphy.com/v1/gifs/search?api_key=h5nEbFf0nz3FmKUhFMFajDQpM6ew66XF&q=&limit=18&offset=0&rating=G&lang=en
  
    function images (img) {
      let $div = $('<div class="row"></div>');
      $('<div class="col"></div>').append(img).appendTo($div);
      $('#show').append($div)
    }
  
    function resultLoad(img) {
      return new Promise((resolve, reject) => {
        img.onload = resolve;
      });
    }
  //search field text box 
    (function listenOnFormSubmit() {
      $('#searchForm').submit(async (ev) => {
        ev.preventDefault();
  
        let $input = $('#searchInput');
  
        main($input.val());
      });
       
     
    })
    ();
    async function main(keyword) {
      //async function search(keyword){
       
      const result = await giphySearchEngine(keyword);
      $('#show').html('');    
      
      let promises = [];
      result.data.forEach(gif => {
         let img = new Image();
         img.src = gif.images.downsized.url;
         promises.push(resultLoad(img));
        images (img);
      });
    }
    $("a.nav-link").on("mouseover", function() {
      $(this).css("color", "blue");
  }).on("mouseout", function() {
        $(this).css("color", "white");
  });




       //Gif limit buttons
    //  $('#btn6').on('click', async function() {
    //     console.log('Get me 6 results!');
    //     const newResults = await giphySearchEngine(keyword, 6);
    //   });
    
    //   $('#btn12').on('click', async function() {
    //     console.log('Get me 12 results!');
    //     const newResults = await giphySearchEngine(keyword, 12);
    //   });
    
    //   $('#btn18').on('click', async function() {
    //     console.log('Get me 18 results!');
    //     const newResults = await giphySearchEngine(keyword, 18);
    //   });
    // }
  })();

