// début de l'exercice 
 var species = {
 	cat: "cat.jpg",
 	bear: "bear.jpg",
 	fish: "fish.jpg"
 };

 function main (){
 	$('button').click(function (){
 		var attr = $(this).data('animal');
 		console.log(attr);
 		var path = species [attr];
 		$('#holder').html("<img src='img/" + path + "'alt='' />");
 	})
 }

// var species = {
// 	cat    : "cat.jpg",
// 	bear   : "bear.jpg",
// 	fish   : "fish.jpg"
// };

// function main(){
// 	$('button').click(function(){ //écoute quand on clique sur le bouton 
// 		var attr = $(this).data('animal'); //déclare la data animal en variable 
// 		console.log(attr); //affiche dans la console la valeur dans laquelle on a cliquer ;
// 		var path = species [attr];
// 		$('#holder').html("<img src='img/" + path + "'alt='' />");

// 	});

	/* 
	tout votre code doit se trouver dans cette fonction,
	vous pouvez biensur créer d'autres fonctions si nécessaire
	*/

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	
	 
// }

$(document).ready(function(){
	main();
});