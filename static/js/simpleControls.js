var a=-10,b = 5,c = 0
var tempX=0,tempY=0
document.onkeydown = function(key){
    switch (key.keyCode){
        case 65: a -= 0.2;break//left
        case 87: c -= 0.2;break//up
        case 68: a += 0.2;break//right
        case 83: c += 0.2;break//down
        case 81: b -= 0.2;break
        case 69: b += 0.2;break
    }
    moveObject(cube,a,b,c)
}

function moveCamera(x,y,z){
    camera.position.x = x
    camera.position.y = y
    camera.position.z = z
    camera.updateProjectionMatrix()
}

function rotateCube(obj,a,b){
    obj.rotation.x += a / 200
    obj.rotation.y += b / 200
}

function moveObject(obj,x,y,z){
    obj.position.x += (x - obj.position.x)
    obj.position.y += (y - obj.position.y)
    obj.position.z += (z - obj.position.z)
    moveCamera(a,b+20,c+40)
    camera.lookAt(obj.position)
}

moveObject(cube,-10,5,0)