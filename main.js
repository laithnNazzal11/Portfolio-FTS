
let visibleMySkils = () => {
    let x = document.getElementById("allskils")
    x.innerHTML = 
    `
    <div class="skils">
    
    
    
    <div class="prog-holder">
    
    <h4>Adobe Photoshope</h4>
    
    <div class="prog">
       <span style="width: 90%" data-progress="90%"></span> 
    </div>
    
    </div>
    <!--2-->
    
    <div class="prog-holder">
    
    <h4>Html &amp; css</h4>
    
    <div class="prog">
       <span style="width: 85%" data-progress="85%"></span> 
    </div>
    </div>
    <!--3-->
    
    <div class="prog-holder">
    
    <h4>React</h4>
    
    <div class="prog">
       <span style="width: 75%" data-progress="75%"></span> 
    </div>
    </div>
    <!--4-->
    
    <div class="prog-holder">
    
    <h4>React Native</h4>
    
    <div class="prog">
       <span style="width: 65%" data-progress="65%"></span> 
    </div>
    </div>
    
    </div>
    
    
    `
    let y = document.getElementById("my-skils")
    y.style.backgroundColor='#0A0509'
    y.style.color='white'

    let w = document.getElementById("about-me")
    w.style.backgroundColor='#ebeced'
    w.style.color='#0A0509'
}

let visibleAboutMe =() => {
    let x = document.getElementById("allskils")
    x.innerHTML = 
    `
    <div class="information" id="information">
    <div>
        <h4><strong>Name: </strong>Laith Nazzal</h4>
        <h4><strong>Email: </strong> laith.gorge@gmai.com</h4>
        <h4><strong>Address: </strong>Palestine-Jenin</h4>
    </div>

    <div>
        <h4><strong>Age: </strong>22</h4>
        <h4><strong>Phone: </strong>+972593028457</h4>
        <h4><strong>Nationality: </strong>Palestinian</h4>
    </div>
</div>
    `

    let y = document.getElementById("about-me")
    y.style.backgroundColor='#0A0509'
    y.style.color='white' 
    
    
    let w = document.getElementById("my-skils")
    w.style.backgroundColor='#ebeced'
    w.style.color='#0A0509'
}



