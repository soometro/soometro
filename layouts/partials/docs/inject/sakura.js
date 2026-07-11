(function () {
    const maxPetals = 120; 
    const petals = [];
    const sakuraFlowerUrl = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2050%2050%27%20width%3D%27100%25%27%20height%3D%27100%25%27%3E%3Cpath%20d%3D%27M25%2C18%20C22%2C6%2012%2C6%2016%2C18%20C7%2C14%205%2C24%2016%2C24%20C10%2C33%2019%2C38%2025%2C28%20C31%2C38%2040%2C33%2034%2C24%20C45%2C24%2043%2C14%2034%2C18%20C38%2C6%2028%2C6%2025%2C18%20Z%27%20fill%3D%27%23ff69b4%27%20opacity%3D%270.85%27%2F%3E%3C%2Fsvg%3E";
    
    // body가 아닌 전용 컨테이너에만 꽃잎을 추가/제거 (body 자식 구조 변경 방지 → CLS 회피)
    const container = document.getElementById('sakura-container');
    if (!container) return;

    function createPetal() {
        if (petals.length >= maxPetals) return;
        const petal = document.createElement('img');
        petal.src = sakuraFlowerUrl;
        petal.style.position = 'absolute'; // 컨테이너 기준 절대 위치 (컨테이너가 이미 fixed)
        petal.style.top = '-30px';
        
        petal.style.left = Math.random() * (window.innerWidth + 250) + 'px';
        
        const size = Math.random() * 6 + 12;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        petal.style.pointerEvents = 'none';
        
        const speedY = Math.random() * 0.8 + 1.1;
        const speedX = -(Math.random() * 0.6 + 0.5);
        
        const startTop = -30;
        const startLeft = parseFloat(petal.style.left);
        let deltaTop = 0;
        let deltaLeft = 0;
        
        let rotX = Math.random() * 360;
        let rotY = Math.random() * 360;
        let rotZ = Math.random() * 360;
        const rotSpeedX = Math.random() * 2 - 1;
        const rotSpeedY = Math.random() * 1.5 + 0.5;
        const rotSpeedZ = Math.random() * 1 - 0.5;
        
        container.appendChild(petal); // body 대신 컨테이너에 추가
        petals.push(petal);
        
        function fall() {
            deltaTop += speedY;
            deltaLeft += speedX;
            
            rotX += rotSpeedX;
            rotY += rotSpeedY;
            rotZ += rotSpeedZ;
            
            petal.style.transform = `translate3d(${deltaLeft}px, ${deltaTop}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
            
            if (startTop + deltaTop > window.innerHeight || startLeft + deltaLeft < -30) {
                petal.remove();
                petals.splice(petals.indexOf(petal), 1);
            } else {
                requestAnimationFrame(fall);
            }
        }
        requestAnimationFrame(fall);
    }
    setInterval(createPetal, 110);
})();