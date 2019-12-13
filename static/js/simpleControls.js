var a = -10,
    b = 5,
    c = 0,
    ca = 0,
    cb = 0,
    cc = 0,
    ro = 0
var tempX = 0,
    tempY = 0
document.onkeydown = function (key) {
    switch (key.keyCode) {
        case 65:
            a -= 0.2;
            ro = 0.2;
            break //left
        case 87:
            c -= 0.2;
            ro = 0;
            break //up
        case 68:
            a += 0.2;
            ro = -0.2;
            break //right
        case 83:
            c += 0.2;
            ro = 0;
            break //down
        case 81:
            b -= 0.2;
            ro = 0;
            break
        case 69:
            b += 0.2;
            ro = 0;
            break
    }
    moveObject(cube, a, b, c)
}

document.onmousemove = function (event) {
    if (tempX == 0 && tempY == 0) {
        tempX = event.clientX
        tempY = event.clientY
        return
    }
    tempX = event.clientX - tempX
    tempY = event.clientY - tempY
    ca -= tempX/10//left-right
    cb += tempY/10//up-down
    moveCamera()
    tempX = event.clientX
    tempY = event.clientY
}

function moveCamera() {
    camera.position.x = ca + a
    camera.position.y = cb + b + 20
    camera.position.z = cc + c + 40
    camera.lookAt(cube.position)
    camera.updateProjectionMatrix()
}

function rotateCube(obj, a, b) {
    obj.rotation.x += a / 200
    obj.rotation.y += b / 200
}

function moveObject(obj, x, y, z) {
    obj.position.x += (x - obj.position.x)
    obj.position.y += (y - obj.position.y)
    obj.position.z += (z - obj.position.z)
    cube.rotation.z += ro
    moveCamera()
}

moveObject(cube, -10, 5, 0)