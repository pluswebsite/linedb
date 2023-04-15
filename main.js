class LineDB{
  constructor(apiKey, binId){
    this.bin = binId;
    this.api = apiKey;
    this.data;
  }
  get(callback){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        callback(req.responseText);
        this.data = req.responseText;
      }
    };

     req.open("GET", "https://api.jsonbin.io/v3/b/" + this.bin + "/?meta=false", true);
     req.setRequestHeader("X-Master-Key", this.api);
     req.send();
  }
  uptade(key, value, callback=console.log){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        callback(req.responseText);
      }
    };
    
    this.data[key] = value;

    req.open("PUT", "https://api.jsonbin.io/v3/b/" + this.bin, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", this.api);
    req.send(this.data);
  }
}
