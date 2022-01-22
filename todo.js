setTimeout(() => {
	let start;
	let listToDo = [];

	while (start !== "quit") {
		if (start === "new") {
			let addList = prompt("What you want to do? ");
			listToDo.push(addList);
			console.log(`${addList} added`);
		} else if (start === "list") {
			console.log("--------to do list-------");
			for (let i = 0; i < listToDo.length; i++) {
				console.log(`${i}: ${listToDo[i]}`);
			}
			console.log("-------------------------");
		} else if (start === "delete") {
			let removeList = parseInt(
				prompt("Which one? (Enter number of the list)")
			);

			if (!isNaN(removeList)) {
				let removed = listToDo.splice(removeList, 1);
				console.log(`${removed[0]} deleted`);
			} else {
				alert("please enter a number");
			}
		} else if (start === "quit") {
			start = "quit";
		}
		start = prompt("Input command: ");
	}
	console.log("Thank You!!!");
}, 500);
