slider.fetchFlickr=function(options){this.fetchJson("http://www.flickr.com/services/rest/?jsoncallback=?",$.extend({method:"flickr.photos.getRecent",per_page:10,format:"json",api_key:"be902d7f912ea43230412619cb9abd52"},options),function(json){return $.map(json.photos.photo,function(photo){return{link:"http://www.flickr.com/photos/"+photo.owner+"/"+photo.id,src:"http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_z.jpg",name:photo.title.substring(0,20)}})});return this};