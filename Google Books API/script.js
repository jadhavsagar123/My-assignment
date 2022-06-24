$('#input').bind('input', startTimerAction);
            
            previewTemplate="<div class='preview-div'>\
                                <div class='image-div'>\
                                    <img class='img-responsive fotina'/>\
                                </div>\
                                <p class='info'>\
                                        <strong><span class='title'></span></strong></br>\
                                        <span class='authors'></span></br>\
                                        <span class='publish'></span>\
                                <p>\
                             </div>"
             svgBookIcon='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">\
                            <path d="M14 2v13h-10.5c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h9.5v-12h-10c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12v-14h-1z" fill="#444444"></path>\
                            <path d="M3.501 13v0c-0 0-0.001 0-0.001 0-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0 0 0.001-0 0.001-0v0h9.498v-1h-9.498z" fill="#444444"></path>\
                        </svg>'          
 
            function googleBookRequest(query,successCallback,failCallback){        
                var url =  "https://www.googleapis.com/books/v1/volumes?";
                var q = '';        
                var standard = ["intitle","inauthor","inpublisher","subject","isbn","lccn","oclc"];
 
                //search params
                if(query.all)
                    q += query.all;
                /*
                * insert all key->value in query
                * using google standard
                */
                for( var key in query ){
                    if(key == 'all')
                        continue;
                    if(key in standard)
                        q += '+'+key+':'+query[key];        
                }
                
                for(var key in query){
                    if(key == 'all')
                        continue;
                    q += '&'+key+'='+query[key];
                }
                
                if(!q)
                    return;
 
                // console.log("Query to Google Books: \n"+JSON.stringify(query));
                                
                url += 'q='+q;
 
                $.ajax({
                    dataType: "json",
                    url: url,
                    success: successCallback,
                    fail: failCallback
                });
            }
 
            function filterGoogleBook(googleBook){
                var filtered = {};                
                filtered.title = googleBook.title;
                filtered.authors = googleBook.authors;
                filtered.thumbnail = '';
                filtered.publish = '';
                
                //thumbnail
                if(googleBook.imageLinks &&
                   googleBook.imageLinks.thumbnail)                
                        filtered.thumbnail = googleBook.imageLinks.thumbnail;
                
                //published (parse date)      
                if(googleBook.publishedDate){                  
                    var date = new Date(googleBook.publishedDate);
                    var year = date.getFullYear(date);
                    filtered.publish = year +' ';
                }
                if(googleBook.publisher)                    
                    filtered.publish += googleBook.publisher;
                
                return filtered;
            }
        
            var currTimer;
 
            function startTimerAction(){
                var query = $("#input").val();
                if (currTimer)
                    window.clearTimeout(currTimer);
                if(query){
                    var googleReq = {'all':query,
                                     'projection':'lite',
                                     'maxItems':15
                                    };
                    currTimer = window.setTimeout( function () { googleBookRequest(googleReq,onQuerySuccess,onQueryFail) }, 1500);
                        
                }else
                    cleanResults();
            }
 
            function onQuerySuccess(data){
                cleanResults();
                $('#results').html("<pre>"+JSON.stringify(data, null, " ")+"</pre>");
                if(! data.items)
                    return;
                
                var totalResults = data.items.length;              
                for(i=0; i<totalResults; i++){
                    var googleBook = data.items[i].volumeInfo
                    addPreview(filterGoogleBook(googleBook));
                }
            }
 
            function onQueryFail(){
                cleanResults();
            }
 
            function addPreview(book){
          
                var newPreview = $(previewTemplate);
                if(book.thumbnail){
                    newPreview.find('.fotina').attr("src",book.thumbnail);
                }else{
                    newPreview.find('.fotina').hide();
                    bookIcon = $(svgBookIcon);
                    newPreview.find('.image-div').append(bookIcon);
                }
                newPreview.find('.title').html(book.title);
                newPreview.find('.authors').html(book.authors);
                newPreview.find('.publish').html(book.publish);
                newPreview.tooltip({html:true,
                                    placement: "auto",
                                    title:
                                        "<strong>"+book.title+"</strong><br>"+
                                        book.authors+"<br>"+
                                        book.publish});
                newPreview.hide();
                $('#previews').append(newPreview);
                newPreview.fadeIn('slow');
            }
            
            function cleanResults(){
                $('#previews').html("");
                $('#results').html("");
            }