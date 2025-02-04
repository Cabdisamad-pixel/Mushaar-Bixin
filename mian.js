let Koox=document.getElementById('Koox');
let Shaqsi=document.getElementById('Shaqsi');
let InputForm=document.getElementById('InputForm')
let OutBox=document.getElementById('OutBox');
OutBox.style.float='left'

let table_content=document.getElementById('table_content')


let h1=document.createElement('h4');

let LabelMagaca=document.createElement('label')

let InputMagaca=document.createElement('input')


let LabelQiimaha=document.createElement('label')

let InputQiimaha=document.createElement('input')

let LabelMushaarBixiye=document.createElement('label')

let InputMushaarBixiye=document.createElement('input')

// let LabelShaqsi=document.createElement('label')

let Geli =document.createElement('button')

let Boxes=document.createElement('div')
Boxes.style.display='flex'
Boxes.style.float='right'
Boxes.style.marginTop='15px'
Boxes.style.marginLeft='15px'



let box1=document.createElement('div');

let section1=document.createElement('div')

let section1Paragraph=document.createElement('p')

let Section1Image=document.createElement('img')

let Section1H1=document.createElement('h1')

let box2=document.createElement('div');

let section2=document.createElement('div')

let section2Paragraph=document.createElement('p')

let Section2H1=document.createElement('h1')

let Section2Image=document.createElement('img')


let box3=document.createElement('div');

let Section3=document.createElement('div')

let Section3Image=document.createElement('img')

let Section3H1=document.createElement('h1')

let Section3Pragraph=document.createElement('p')


let xisaabta_lacagta=0;
let xisaabinta_dadka=0;
let xisaabta_groupyada=0;

let table=document.createElement('table')
table.className='table';
table.classList.add('table-hover')
let trHead = document.createElement('tr')
table.appendChild(trHead)
let Thead1=document.createElement('th')
Thead1.textContent='MAGACA'
let Thead2=document.createElement('th')
Thead2.textContent='SHAQSIGA'
let Thead3=document.createElement('th')
Thead3.textContent='LACAGTA'
let Thead4=document.createElement('th')
Thead4.textContent='EDIT'
let Thead5=document.createElement('th')
Thead5.textContent='CLEAR'
trHead.appendChild(Thead1)
trHead.appendChild(Thead2)
trHead.appendChild(Thead3)
trHead.appendChild(Thead4)
trHead.appendChild(Thead5)


Koox.addEventListener('click',()=>{

    let xisaabta_lacagta=0;
    let xisaabinta_dadka=0;
    let xisaabta_groupyada=0;

    InputForm.className='shadow p-3 mb-5 bg-body rounded'
    InputForm.style.backgroundColor='wheat'
    InputForm.style.width='450px'
    InputForm.style.height='450px'
    InputForm.style.marginTop='10px'
    InputForm.style.marginLeft='7px'
    InputForm.style.float='left'

    h1.textContent='MUSHAARKA KOOXDA'
    h1.style.textAlign='center'
    h1.style.marginBottom='15px'
    LabelMagaca.className='form-label'
    LabelMagaca.textContent='Magaca Kooxda'
    // LabelKooxda.style.display='block'
    LabelMagaca.style.marginTop='7px'
    LabelMagaca.style.marginLeft='10px'

    InputMagaca.setAttribute('placeHolder','Fadlan Geli Magaca Kooxda')
    InputMagaca.className='form-control'
    InputMagaca.style.width='400px'
    InputMagaca.style.marginLeft='7px'
    InputMagaca.style.marginBottom='20px'


    LabelMushaarBixiye.className='form-label'
    LabelMushaarBixiye.textContent='Magaca Mushaar Bixiyaha'
    // LabelKooxda.style.display='block'
    LabelMushaarBixiye.style.marginTop='7px'
    LabelMushaarBixiye.style.marginLeft='10px'

    InputMushaarBixiye.setAttribute('placeHolder','Fadlan Geli Magaca Mushaar Bixiyaha')
    InputMushaarBixiye.className='form-control'
    InputMushaarBixiye.style.width='400px'
    InputMushaarBixiye.style.marginLeft='7px'
    InputMushaarBixiye.style.marginBottom='20px'

    LabelQiimaha.className='form-label'
    LabelQiimaha.textContent='Qiimaha Lacagta'
    // LabelKooxda.style.display='block'
    LabelQiimaha.style.marginTop='7px'
    LabelQiimaha.style.marginLeft='10px'

    InputQiimaha.setAttribute('placeHolder','Fadlan Geli Qiimaha Lacagta')
    InputQiimaha.setAttribute('type','number')
    InputQiimaha.className='form-control'
    InputQiimaha.style.width='400px'
    InputQiimaha.style.marginLeft='7px'
   
    Geli.style.marginLeft='8px'
    Geli.textContent='Xisaabi'
    Geli.style.marginTop='29px'
    Geli.style.width='400px'
    Geli.className='btn btn-outline-success'
    InputForm.appendChild(h1)
    InputForm.appendChild(LabelMushaarBixiye)
    InputForm.appendChild(InputMushaarBixiye)
    InputForm.appendChild(LabelMagaca)
    InputForm.appendChild(InputMagaca)
    InputForm.appendChild(LabelQiimaha)
    InputForm.appendChild(InputQiimaha)
    InputForm.appendChild(Geli)

    box1.style.width='240px'
    box1.style.marginRight='20px'
    box1.style.marginLeft='17px'

    section1.style.width='240px';
    section1.style.height='180px';
    section1.className='shadow p-3 mb-5 bg-body rounded'
    section1.style.border='1px solid black'
    
    Section1Image.src='salary.png';
    Section1Image.style.width='70px'
    Section1Image.style.height='55px'
    Section1Image.style.marginTop='0px'
    Section1Image.style.marginLeft='68px'
    Section1Image.style.display='block'

    Section1H1.textContent=xisaabta_lacagta + '$ +'
    Section1H1.style.color='green'
    Section1H1.style.fontSize='70px'
    Section1H1.style.textAlign='center'
    Section1H1.style.marginTop='10px'

    
    section1.appendChild(Section1Image)
    section1.appendChild(Section1H1)

    section1Paragraph.textContent='Qeybta Kore Waxa Aan Kusoo Bandhignay Lacagaha Mushaar Ahaan U Baxayo Anagoo Aan Umuujnayno Hab Sawir Ahaan Ah'
    section1Paragraph.style.fontSize='16px'

    box1.appendChild(section1)
    box1.appendChild(section1Paragraph)

    box2.style.width='240px'
    box2.style.marginRight='20px'


    section2.style.width='240px';
    section2.style.height='180px';
    section2.className='shadow p-3 mb-5 bg-body rounded'
    section2.style.border='1px solid black'

    Section2Image.src='salary (1).png';
    Section2Image.style.width='70px'
    Section2Image.style.height='55px'
    Section2Image.style.marginTop='0px'
    Section2Image.style.marginLeft='68px'
    Section2Image.style.display='block'

    Section2H1.textContent=xisaabinta_dadka + '+'
    Section2H1.style.color='blue'
    Section2H1.style.fontSize='70px'
    Section2H1.style.textAlign='center'
    Section2H1.style.marginTop='10px'

    
    section2.appendChild(Section2Image)
    section2.appendChild(Section2H1)

    section2Paragraph.textContent='Humaaga Kore Waxa Aan Ku Soo Bandhignay Tirada Shaqsiyaadka Qaadateen Mushaarka(Salary) '
    section2Paragraph.style.fontSize='17px'
    box2.appendChild(section2)
    box2.appendChild(section2Paragraph)

    box3.style.width='240px'
    
    
    Section3.style.width='240px';
    Section3.style.height='180px';
    Section3.className='shadow p-3 mb-5 bg-body rounded'
    Section3.style.border='1px solid black'

    Section3Image.src='crowfunding.png';
    Section3Image.style.width='70px'
    Section3Image.style.height='55px'
    Section3Image.style.marginTop='0px'
    Section3Image.style.marginLeft='68px'
    Section3Image.style.display='block'
    

    Section3H1.textContent=xisaabta_groupyada + '+'
    Section3H1.style.fontSize='70px'
    Section3H1.style.textAlign='center'
    Section3H1.style.marginTop='10px'

    
    Section3.appendChild(Section3Image)
    Section3.appendChild(Section3H1)

    Section3Pragraph.textContent='Humaaga Kore Waxa Aan Ku Soo Bandhignay Tirada Kooxaha(Groups) Qaaatay Mushaarkooda(Salary)'

    box3.appendChild(Section3)
    box3.appendChild(Section3Pragraph)

    
    


    Boxes.appendChild(box1)
    Boxes.appendChild(box2)
    Boxes.appendChild(box3)

    OutBox.appendChild(Boxes)
    OutBox.appendChild(InputForm)
    // OutBox.appendChild(Paragraphes)
    Geli.addEventListener('click',()=>{
        let Magaca=InputMagaca.value.trim();
        let Qiimaha=parseInt(InputQiimaha.value.trim());
        let MagacaMushaarbixiyaha=InputMushaarBixiye.value.trim();
        if(MagacaMushaarbixiyaha===''){
            alert('Fadlan Soo Geli Magaca Mushaar Bixiyaha')
            return
        }
        if(Magaca===''){
            alert('Fadlan Soo Geli Magaca Mushaar Qaataha')
            return
        }
        if(Qiimaha===''){
            alert('Fadlan Soo Geli Qiimaha La Bixinaayo')
            return
        }

        let hassUppercase = /[A-Z]/.test(MagacaMushaarbixiyaha);
        if(hassUppercase){
        // alert('Password  contain at least one uppercase letter');
        }
        else{
        alert('Magaca Mushaar Bixiyaha Ugu Yaraan Waa Inoo Ku jiraa Hal Xaraf Oo Capital Ah');
        return
        }
    
        let TrData=document.createElement('tr')
    
        let TrTd1=document.createElement('td')
        TrTd1.textContent=MagacaMushaarbixiyaha
        let TrTd2=document.createElement('td')
        TrTd2.textContent=Magaca
        let TrTd3=document.createElement('td')
        TrTd3.textContent=Qiimaha
        let TrTd4=document.createElement('td')
        let EditButton=document.createElement('button')
        EditButton.textContent='Edit'
        EditButton.className='btn btn-success'

        EditButton.addEventListener('click',()=>{
            InputMushaarBixiye.value=MagacaMushaarbixiyaha
            InputMagaca.value=Magaca
            InputQiimaha.value=Qiimaha
            TrData.removeChild(TrTd1)
            TrData.removeChild(TrTd2)
            TrData.removeChild(TrTd3)
            TrData.removeChild(TrTd4)
            TrData.removeChild(TrTd5)
            xisaabta_groupyada -=1
            xisaabta_lacagta -= Qiimaha
            Section3H1.textContent=xisaabta_groupyada  
            Section1H1.textContent=xisaabta_lacagta


        })

        TrTd4.appendChild(EditButton)
        let TrTd5=document.createElement('td')
        let ClearButton=document.createElement('button')
        ClearButton.textContent='clear'
        ClearButton.className='btn btn-danger'
        ClearButton.addEventListener('click',()=>{
            TrData.removeChild(TrTd1)
            TrData.removeChild(TrTd2)
            TrData.removeChild(TrTd3)
            TrData.removeChild(TrTd4)
            TrData.removeChild(TrTd5)
            xisaabta_groupyada -=1
            xisaabta_lacagta -= Qiimaha
            Section3H1.textContent=xisaabta_groupyada  
            Section1H1.textContent=xisaabta_lacagta

        })
        TrTd5.appendChild(ClearButton)
    
        xisaabta_groupyada +=1
        xisaabta_lacagta += Qiimaha
        // alert(typeof(Qiimaha))

        Section2H1.textContent=xisaabinta_dadka +'+'
        Section1H1.textContent=xisaabta_lacagta
        Section3H1.textContent=xisaabta_groupyada
        
        TrData.appendChild(TrTd1)
        TrData.appendChild(TrTd2)
        TrData.appendChild(TrTd3)
        TrData.appendChild(TrTd4)
        TrData.appendChild(TrTd5)
       
        table.appendChild(TrData)

        
        
        table_content.appendChild(table)
        // table_content.appendChild(TrData)

        InputMagaca.value=''
        InputMushaarBixiye.value=''
        InputQiimaha.value=''
    })   
})
Shaqsi.addEventListener('click',()=>{
    
    InputForm.className='shadow p-3 mb-5 bg-body rounded'
    InputForm.style.backgroundColor='wheat'
    InputForm.style.width='450px'
    InputForm.style.height='450px'
    InputForm.style.marginTop='10px'
    InputForm.style.marginLeft='7px'
    InputForm.style.float='left'

    

    h1.textContent='MUSHAARKA SHAQSIGA'
    h1.style.textAlign='center'
    h1.style.marginBottom='15px'
    LabelMagaca.className='form-label'
    LabelMagaca.textContent='Magaca Shaqsiga'
    // LabelKooxda.style.display='block'
    LabelMagaca.style.marginTop='7px'
    LabelMagaca.style.marginLeft='10px'

    LabelMushaarBixiye.className='form-label'
    LabelMushaarBixiye.textContent='Magaca Mushaar Bixiyaha'
    // LabelKooxda.style.display='block'
    LabelMushaarBixiye.style.marginTop='7px'
    LabelMushaarBixiye.style.marginLeft='10px'

    InputMushaarBixiye.setAttribute('placeHolder','Fadlan Geli Magaca Mushaar Bixiyaha')
    InputMushaarBixiye.className='form-control'
    InputMushaarBixiye.style.width='400px'
    InputMushaarBixiye.style.marginLeft='7px'
    InputMushaarBixiye.style.marginBottom='20px'

    InputMagaca.setAttribute('placeHolder','Fadlan Geli Magaca Shaqsiga')
    InputMagaca.className='form-control'
    InputMagaca.style.width='400px'
    InputMagaca.style.marginLeft='7px'
    InputMagaca.style.marginBottom='20px'

    LabelQiimaha.className='form-label'
    LabelQiimaha.textContent='Qiimaha Lacagta'
    // LabelKooxda.style.display='block'
    LabelQiimaha.style.marginTop='7px'
    LabelQiimaha.style.marginLeft='10px'

    InputQiimaha.setAttribute('placeHolder','Fadlan Geli Qiimaha Lacagta')
    InputQiimaha.setAttribute('type','number')
    InputQiimaha.className='form-control'
    InputQiimaha.style.width='400px'
    InputQiimaha.style.marginLeft='7px'
   
    Geli.style.marginLeft='8px'
    Geli.textContent='Xisaabi'
    Geli.style.marginTop='29px'
    Geli.style.width='400px'
    Geli.className='btn btn-outline-success'
    InputForm.appendChild(h1)
    InputForm.appendChild(LabelMushaarBixiye)
    InputForm.appendChild(InputMushaarBixiye)
    InputForm.appendChild(LabelMagaca)
    InputForm.appendChild(InputMagaca)
    InputForm.appendChild(LabelQiimaha)
    InputForm.appendChild(InputQiimaha)
    InputForm.appendChild(Geli)

    box1.style.width='240px'
    box1.style.marginRight='20px'
    box1.style.marginLeft='17px'

    section1.style.width='240px';
    section1.style.height='180px';
    section1.className='shadow p-3 mb-5 bg-body rounded'
    section1.style.border='1px solid black'
    
    Section1Image.src='salary.png';
    Section1Image.style.width='70px'
    Section1Image.style.height='55px'
    Section1Image.style.marginTop='0px'
    Section1Image.style.marginLeft='68px'
    Section1Image.style.display='block'

    Section1H1.textContent=xisaabta_lacagta
    Section1H1.style.color='green'
    Section1H1.style.fontSize='70px'
    Section1H1.style.textAlign='center'
    Section1H1.style.marginTop='10px'

    
    section1.appendChild(Section1Image)
    section1.appendChild(Section1H1)

    section1Paragraph.textContent='Qeybta Kore Waxa Aan Kusoo Bandhignay Lacagaha Mushaar Ahaan U Baxayo Anagoo Aan Umuujnayno Hab Sawir Ahaan Ah'
    section1Paragraph.style.fontSize='16px'

    box1.appendChild(section1)
    box1.appendChild(section1Paragraph)

    box2.style.width='240px'
    box2.style.marginRight='20px'


    section2.style.width='240px';
    section2.style.height='180px';
    section2.className='shadow p-3 mb-5 bg-body rounded'
    section2.style.border='1px solid black'

    Section2Image.src='salary (1).png';
    Section2Image.style.width='70px'
    Section2Image.style.height='55px'
    Section2Image.style.marginTop='0px'
    Section2Image.style.marginLeft='68px'
    Section2Image.style.display='block'

    Section2H1.textContent=xisaabinta_dadka + '+'
    Section2H1.style.color='blue'
    Section2H1.style.fontSize='70px'
    Section2H1.style.textAlign='center'
    Section2H1.style.marginTop='10px'

    
    section2.appendChild(Section2Image)
    section2.appendChild(Section2H1)

    section2Paragraph.textContent='Humaaga Kore Waxa Aan Ku Soo Bandhignay Tirada Shaqsiyaadka Qaadateen Mushaarka(Salary) '
    section2Paragraph.style.fontSize='17px'
    box2.appendChild(section2)
    box2.appendChild(section2Paragraph)

    box3.style.width='240px'
    
    
    Section3.style.width='240px';
    Section3.style.height='180px';
    Section3.className='shadow p-3 mb-5 bg-body rounded'
    Section3.style.border='1px solid black'

    Section3Image.src='crowfunding.png';
    Section3Image.style.width='70px'
    Section3Image.style.height='55px'
    Section3Image.style.marginTop='0px'
    Section3Image.style.marginLeft='68px'
    Section3Image.style.display='block'
    

    Section3H1.textContent=xisaabta_groupyada + '+'
    Section3H1.style.fontSize='70px'
    Section3H1.style.textAlign='center'
    Section3H1.style.marginTop='10px'

    
    Section3.appendChild(Section3Image)
    Section3.appendChild(Section3H1)

    Section3Pragraph.textContent='Humaaga Kore Waxa Aan Ku Soo Bandhignay Tirada Kooxaha(Groups) Qaaatay Mushaarkooda(Salary)'

    box3.appendChild(Section3)
    box3.appendChild(Section3Pragraph)

    
    


    Boxes.appendChild(box1)
    Boxes.appendChild(box2)
    Boxes.appendChild(box3)

    OutBox.appendChild(Boxes)
    OutBox.appendChild(InputForm)
    // OutBox.appendChild(Paragraphes)
    Geli.addEventListener('click',()=>{
        let Magaca=InputMagaca.value.trim();
        let Qiimaha=parseInt(InputQiimaha.value.trim());
        let MagacaMushaarbixiyaha=InputMushaarBixiye.value.trim();
        if(MagacaMushaarbixiyaha===''){
            alert('Fadlan Soo Geli Magaca Mushaar Bixiyaha')
            return
        }
        if(Magaca===''){
            alert('Fadlan Soo Geli Magaca Mushaar Qaataha')
            return
        }
        if(Qiimaha===''){
            alert('Fadlan Soo Geli Qiimaha La Bixinaayo')
            return
        }

        let hassUppercase = /[A-Z]/.test(MagacaMushaarbixiyaha);
        if(hassUppercase){
        // alert('Password  contain at least one uppercase letter');
        }
        else{
        alert('Magaca Mushaar Bixiyaha Ugu Yaraan Waa Inoo Ku jiraa Hal Xaraf Oo Capital Ah');
        return
        }
    
        let TrData=document.createElement('tr')
    
        let TrTd1=document.createElement('td')
        TrTd1.textContent=MagacaMushaarbixiyaha
        let TrTd2=document.createElement('td')
        TrTd2.textContent=Magaca
        let TrTd3=document.createElement('td')
        TrTd3.textContent=Qiimaha
        let TrTd4=document.createElement('td')
        let EditButton=document.createElement('button')
        EditButton.textContent='Edit'
        EditButton.className='btn btn-success'
        EditButton.addEventListener('click',()=>{
            InputMushaarBixiye.value=MagacaMushaarbixiyaha
            InputMagaca.value=Magaca
            InputQiimaha.value=Qiimaha
            TrData.removeChild(TrTd1)
            TrData.removeChild(TrTd2)
            TrData.removeChild(TrTd3)
            TrData.removeChild(TrTd4)
            TrData.removeChild(TrTd5)
            xisaabinta_dadka -=1
            xisaabta_lacagta -= Qiimaha
            Section2H1.textContent=xisaabinta_dadka  
            Section1H1.textContent=xisaabta_lacagta


        })
        TrTd4.appendChild(EditButton)
        let TrTd5=document.createElement('td')
        let ClearButton=document.createElement('button')
        ClearButton.textContent='clear'
        ClearButton.className='btn btn-danger'
        ClearButton.addEventListener('click',()=>{
            TrData.removeChild(TrTd1)
            TrData.removeChild(TrTd2)
            TrData.removeChild(TrTd3)
            TrData.removeChild(TrTd4)
            TrData.removeChild(TrTd5)
            xisaabinta_dadka -=1
            xisaabta_lacagta -= Qiimaha
            Section2H1.textContent=xisaabinta_dadka  
            Section1H1.textContent=xisaabta_lacagta

        })
        TrTd5.appendChild(ClearButton)
    
        xisaabinta_dadka +=1
        xisaabta_lacagta += Qiimaha
        // alert(typeof(Qiimaha))

        Section2H1.textContent=xisaabinta_dadka +'+' 
        Section1H1.textContent=xisaabta_lacagta
        
        TrData.appendChild(TrTd1)
        TrData.appendChild(TrTd2)
        TrData.appendChild(TrTd3)
        TrData.appendChild(TrTd4)
        TrData.appendChild(TrTd5)
       
        table.appendChild(TrData)

        
        
        table_content.appendChild(table)
        // table_content.appendChild(TrData)
        
        InputMagaca.value=''
        InputMushaarBixiye.value=''
        InputQiimaha.value=''
        
    })
})
