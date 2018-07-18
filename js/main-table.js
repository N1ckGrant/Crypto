var HIDDEN_CLASS_NAME = 'hidden'
var TARGET_CLASS_NAME = 'target'
var SOURCE_CLASS_NAME = 'source'

var targetIdToShow = 1

function main() {
	var targets = getElements(TARGET_CLASS_NAME)
	var sources = getElements(SOURCE_CLASS_NAME)
	sources.forEach(function (sourceNode) {
		var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
		sourceNode.addEventListener('click', function () {
			showTarget(targets, sourceNodeId)
		})
	})
	showTarget(targets, targetIdToShow)
}

function getElements(type) {
	return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
		var target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
		var target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
		return target1Num > target2Num
	})
}

function extractId(targetNode, baseClass) {
	var currentClassIndex = targetNode.classList.length
	while (currentClassIndex--) {
		var currentClass = targetNode.classList.item(currentClassIndex)
		var maybeIdNum = parseInt(currentClass.split('-')[1])
		if (isNaN(maybeIdNum)) {
			continue
		}
		var classStrinToValidate = baseClass + '-' + maybeIdNum
		if (classStrinToValidate === currentClass) {
			return maybeIdNum
		}
	}
}

function showTarget(targets, targetId) {
	targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
		if (currentTargetNodeId === targetId) {
			targetNode.classList.remove(HIDDEN_CLASS_NAME)
		} else {
			targetNode.classList.add(HIDDEN_CLASS_NAME)
		}
	})
}

main()

$(document).ready(function(){
  console.log('my_tabs_home')
  
  $('div.nav-table span').click(function(){
    $('div.nav-table span').removeClass('active_tabs');
    $('svg.svg_icon_home_table').removeClass('active_tabs_svg');
    $(this).addClass('active_tabs',);  
    $(this).find("svg.svg_icon_home_table").addClass('active_tabs_svg');
    // $('.nav-table svg').removeClass('active_tabs_svg');

  })

})

$(document).ready(function(){
  console.log('my_tabs')
  
  $('div.nav_orders div').click(function(){
    $('div.nav_orders div').removeClass('active_tabs');
    $(this).addClass('active_tabs',);  
    ;
    // $('.nav-table svg').removeClass('active_tabs_svg');

  })

})
$(document).ready(function(){
  console.log('my_tabs_order')
  
  $('div.filter_orders div').click(function(){
    $('div.filter_orders div').removeClass('active_tabs');
    $(this).addClass('active_tabs',);  
    ;
    // $('.nav-table svg').removeClass('active_tabs_svg');

  })

})
