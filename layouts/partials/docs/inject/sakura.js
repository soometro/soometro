(function () {
    // 영상처럼 화면 전체가 아련하고 풍성해 보이도록 개수 조율
    const maxPetals = 120; 
    const petals = [];

    // [셔터스톡 5무늬 오리지널 실루엣 구현] 브라우저 깨짐이 전혀 없는 완벽한 인코딩 포맷
    const sakuraFlowerUrl = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox%3D%270%200%2050%2050%27%20width%3D%27100%25%27%20height%3D%27100%25%27%3E%3Cpath%20d%3D%27M25%2C18%20C22%2C6%2012%2C6%2016%2C18%20C7%2C14%205%2C24%2016%2C24%20C10%2C33%2019%2C38%2025%2C28%20C31%2C38%2040%2C33%2034%2C24%20C45%2C24%2043%2C14%2034%2C18%20C38%2C6%2028%2C6%2025%2C18%20Z%27%20fill%3D%27%23ff69b4%27%20opacity%3D%270.85%27%2F%3E%3C%2Fsvg%3E";

    function createPetal() {
        if (petals.length >= maxPetals) return;

        const petal = document.createElement('img');
        petal.src = sakuraFlowerUrl;
        petal.style.position = 'fixed';
        petal.style.top = '-30px';
        
        // [방향 조율] 우측에서 좌측 사선 방향으로 흐르도록 화면 우측에 시작 가중치 부여
        petal.style.left = Math.random() * (window.innerWidth + 250) + 'px';
        
        // 영상 속 가늘고 아담하게 쏟아지는 꽃송이 사이즈 재현 (12px ~ 18px)
        const size = Math.random() * 6 + 12;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        petal.style.pointerEvents = 'none';
        petal.style.zIndex = '9999';
        
        // [속도 및 방향 제어] 요청하신 대로 천천히, 그리고 마이너스(-) 축을 주어 왼쪽 사선 낙하
        const speedY = Math.random() * 0.8 + 1.1; // 부드럽고 잔잔하게 떨어지는 속도
        const speedX = -(Math.random() * 0.6 + 0.5); // 왼쪽으로 밀리는 흐름
        
        let top = -30;
        let left = parseFloat(petal.style.left);
        
        // 3D 공간에서 입체적으로 뒤집히며 떨어지도록 입체 회전각 세팅 (셔터스톡 연출의 핵심)
        let rotX = Math.random() * 360;
        let rotY = Math.random() * 360;
        let rotZ = Math.random() * 360;
        const rotSpeedX = Math.random() * 2 - 1;
        const rotSpeedY = Math.random() * 1.5 + 0.5;
        const rotSpeedZ = Math.random() * 1 - 0.5;

        document.body.appendChild(petal);
        petals.push(petal);

        function fall() {
            top += speedY;
            left += speedX;
            
            // 3D 회전값을 계속 증가시켜 팔랑거리며 뒤집히는 효과 연출
            rotX += rotSpeedX;
            rotY += rotSpeedY;
            rotZ += rotSpeedZ;

            petal.style.top = top + 'px';
            petal.style.left = left + 'px';
            // CSS 3D 트랜스폼으로 실제 영상처럼 입체적으로 소용돌이치며 떨어지게 만듭니다.
            petal.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;

            // 화면을 완전히 벗어나면 요소를 깔끔하게 제거
            if (top > window.innerHeight || left < -30) {
                petal.remove();
                petals.splice(petals.indexOf(petal), 1);
            } else {
                requestAnimationFrame(fall);
            }
        }
        requestAnimationFrame(fall);
    }

    // 일시에 쏟아지지 않고 안개처럼 겹겹이 층을 이루며 생성되도록 간격 조율
    setInterval(createPetal, 110);
})();
