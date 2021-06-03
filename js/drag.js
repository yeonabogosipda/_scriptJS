function drag(){
  // 요소나 텍스트 블록을 드래그 할 때 발생한다.
  ondrag
}

function dragend(){
  // 드래그를 끝냈을 때 발생한다.(마우스버튼을 때거나, ESC키를 누를때)
  ondragend
}

function dragenter(){
  // 드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을때 발생한다.
  ondragenter
}

function dragexit(){
  // 요소가 더 이상 드래그의 직접적인 대상이 아닐 때 발생한다.
  ondragexit
}

function dragleave(){
  // 드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 발생한다.
  ondragleave
}

function dragover(){
  // 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생한다.
  ondragover
}

function dragstart(){
  // 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다.
  ondragstart
}

function drop(){
  // 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생한다.
  ondrop
}

const list_items = document.querySelectorAll('.addTodoListDiv');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}