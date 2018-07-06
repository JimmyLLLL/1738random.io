/*
* @Author: JimmyLLLL
* @Date:   2018-05-23 20:21:08
* @Last Modified by:   JimmyLLLL
* @Last Modified time: 2018-05-23 20:56:44
*/
var total = 0;
var name1;
var name2;
var name3;
var name4;
$('#main-input').bind('keypress', function (event) {
            if (event.keyCode == "13") {
            	if(total==0)
            	{
            		name1 = document.getElementById('main-input').value;
            	}
            	else if(total==1)
            	{
            		name2 = document.getElementById('main-input').value;
            	}
            	else if(total==2)
            	{
            		name3 = document.getElementById('main-input').value;
            	}
            	else if(total==3)
            	{
            		name4 = document.getElementById('main-input').value;
            	}
            	
            	document.getElementById('count-p').style.display = "block";
            	document.getElementById('count-p').innerHTML += (document.getElementById('main-input').value+' ');
            	document.getElementById('main-input').value = "";
            	total++;
            	if(total==4)
            	{
            		document.getElementById('main-input').style.display = "none";
            		document.getElementById('ing').style.display = "block";
            		var lucky = Math.floor(Math.random()*4 + 1);
            		if(lucky ==1 )
            		{
            			setTimeout(function(){
            				document.getElementById('ing').innerHTML = name1;
            			},1000) 
            		}
            		else if(lucky ==2  )
            		{
            			setTimeout(function(){
            				document.getElementById('ing').innerHTML = name2;
            			},1000) 
            		}
            		else if(lucky ==3)
            		{
            			setTimeout(function(){
            				document.getElementById('ing').innerHTML = name3;
            			},1000) 
            		}
            		else if(lucky ==4 )
            		{
            			setTimeout(function(){
            				document.getElementById('ing').innerHTML = name4;
            			},1000) 
            		}
            	}
            }
        });