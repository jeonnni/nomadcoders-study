# 기록용 

---

## console.dir()은 DOM 요소의 내부 속성들을 계층 구조로 자세하게 보여주는 함수

### console.log() vs console.dir()
```console.log()```
#### DOM 요소를 HTML 형태로 보여준다. (화면에 보이는 태그 그대로 출력됨)

```console.dir()```
#### DOM 요소를 JavaScript 객체 형태로 출력한다. (요소의 내부 속성, 메서드, 프로토타입까지 자세히 볼 수 있음)

#### ✔ 정리
#### console.log() → 태그 형태 출력
#### console.dir() → 객체 구조 출력 (속성 확인용)

---

## localStorage 저장 : JSON.stringify(), JSON.parse()
#### localStorage는 문자열만 저장할 수 있기 때문에 JavaScript 배열이나 객체를 저장하려면
#### JSON.stringify()로 JSON 문자열로 변환하고, 불러올 때는 JSON.parse()로 다시 배열/객체로 변환해야 한다.
#### 배열이나 데이터를 문자열로 변환하는 함수
```JSON.stringify()```
#### 문자열을 다시 원래 데이터 형태로 되돌려주는 함수
```JSON.parse()```