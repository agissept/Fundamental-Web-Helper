const style = `<style>

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  background: white;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>`

const baseElement = `<div id="open-with" class="dropdown">
<button class="dropbtn btn btn-secondary">Oepn With</button>
<div class="dropdown-content">
  <a href="#" name="webstorm">Webstorm</a>
  <a href="#  name="vs code">Vs Code</a>
</div>
</div>`

const dropdown = baseElement + style