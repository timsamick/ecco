/*
 *  @author Tate Asher Baltzly <tate.baltzly@ecotoh.net>
 *	@version 0.3
 *	@updated 2017-01-03
 */

 var courseRailsModule = (function(){

	var counter = 1;

	//Loaded CSS
	//$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://dl.dropboxusercontent.com/u/235136859/JS/eca_outline.css') );
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://reactor.iqity.net/jcrcontent/contentroot/lor:contentroot/ecdf@ecotoh.org/lor:content/ecdf/ecot_global.css') );

	$('<link/>', {
	   rel: 'stylesheet',
	   type: 'text/css',
	   href: 'https://dl.dropboxusercontent.com/u/235136859/js/ECOT%20Curriculum%20Composition%20Overlay/ECCO.css'
	}).appendTo('head');

	
	$('body').prepend('<div id="loadingImg" class="loading-popup" style=" width:100%; height:100%; position:fixed; z-index:10; background:rgba(0,0,0,0.7); top: 0; left: 0; display:none;"><img src="https://dl.dropboxusercontent.com/u/235136859/js/ECOT%20Curriculum%20Composition%20Overlay/loading.png" style="position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0;"></img></div>')
	$('#loadingImg').fadeIn(250);

	$('<link/>', {
	   rel: 'stylesheet',
	   type: 'text/css',
	   href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
	}).appendTo('head');

	$.getScript( "https://dl.dropboxusercontent.com/u/235136859/js/ECOT%20Curriculum%20Composition%20Overlay/jquery-ui.js" )
	 .done(function( script, textStatus ) {
	   console.log("jquery-ui.js load "+ textStatus );

		$.getScript( "https://dl.dropboxusercontent.com/u/235136859/js/ECOT%20Curriculum%20Composition%20Overlay/aloha.js" )
		 .done(function( script, textStatus ) {
		   console.log("aloha.js load "+ textStatus );

		   $('.docContent').prepend('<input id="bg_css" type="button" value="BG" /><input id="eca_css" type="button" value="ECA" />');
		   //Switch CSS
			$('#bg_css').click(function (){
			   $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://dl.dropboxusercontent.com/u/235136859/JS/eca_outline.css') );
			});
			$('#eca_css').click(function (){
			   $('link[href="https://dl.dropboxusercontent.com/u/235136859/JS/eca_outline.css"]').attr('href','https://reactor.iqity.net/jcrcontent/contentroot/lor:contentroot/ecdf@ecotoh.org/lor:content/ecdf/ecot_global.css');
			});

			function findTitle(){
				var $header = $('#eca_Header');
				$header.wrap('<div class"railsTitle"></div>');
				$header.find('h1').wrap('<div class="objOutline"></div>');
				$header.parent().prepend('<span class="toolbarTitle"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i></span>');
			}

			function findOverviewP(){
				var $OverviewP = $('#eca_overview').find('p');
				if($OverviewP.find('p')){
					$OverviewP.wrap('<div class"railsOverviewP"></div>');
					$OverviewP.addClass('objOutline');
					$OverviewP.before('<span class="toolbarOverviewP"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
				}
				else{}
			}

			function findP(){
				$('#teacherContent > #contentContainer > p').each(function(i){
					objWrapper($(this));
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findContentContainers(){
				$('#teacherContent > #contentContainer').each(function(i){
					$(this).data("index",i+1);	
					$(this).addClass('railsSection');
					addLimitedToolbar($(this).find('.anchorLoc').parent());
				});
			}

			function findTOC(){
				if($('nav ul li').length > 1){

				}
				else{}
			}

			function findHR(){
				$('body').find('hr').each(function(i){
					if($(this).prev().attr('id') == 'contentContainer'){

					}
					else{

					}
				});
			}

			function findH2(){
				$('#teacherContent > #contentContainer > h2').each(function(i){
					if($(this).find('a').attr('class') == 'anchorLoc'){

					}
					else{
						objWrapper($(this))
						addToolbar($(this).closest('.railsObj'));
					}
				});
			}

			function findH3(){
				$('#teacherContent > #contentContainer > h3').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findLists(){
				$('#teacherContent > #contentContainer > ul').each(function(i){
					if($(this).hasClass('media-grid')){

					}
					else{
						objWrapper($(this))
						addToolbar($(this).closest('.railsObj'));
					}
				});
				$('#teacherContent > #contentContainer > ol').each(function(i){
					if($(this).hasClass('media-grid')){

					}
					else{
						objWrapper($(this))
						addToolbar($(this).closest('.railsObj'));
					}
				});
			}

			function findLabels(){
				$('#teacherContent > #contentContainer > label').each(function(i){
					var $label = $(this)
					var parentP = $label.parent('p')

					if($label.hasClass('default')){
						parentP.addClass('railsObj');
						parentP.wrap('<div class="editableBlock"></div>');
						parentP.prepend('<span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					}
					else if($label.hasClass('new')){
						parentP.addClass('railsObj');
						parentP.wrap('<div class="editableBlock"></div>');
						parentP.prepend('<span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					}
					else if($label.hasClass('important')){
						parentP.addClass('railsObj');
						parentP.wrap('<div class="editableBlock"></div>');
						parentP.prepend('<span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					}
					else if($label.hasClass('warning')){
						parentP.addClass('railsObj');
						parentP.wrap('<div class="editableBlock"></div>');
						parentP.prepend('<span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					}
					else if($label.hasClass('notice')){
						parentP.addClass('railsObj');
						parentP.wrap('<div class="editableBlock"></div>');
						parentP.prepend('<span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					}
					else{}
				});
			}

			function findPictures(){
				$('#teacherContent > #contentContainer > .picture').each(function(i){
					objWrapper($(this))
					addToolbar($(this));
				});
			}

			function findImgGrids(){
				$('#teacherContent > #contentContainer > .media-grid').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findEmbeds(){
				$('#teacherContent > #contentContainer > .ecaEmbed').each(function(i){
					objWrapper($(this))
					addToolbar($(this));
				});
			}

			function findAudio(){
				$('#teacherContent > #contentContainer >.ecaAudio').each(function(i){
					objWrapper($(this))
					addToolbar($(this));
				});
			}

			function findTipBoxes(){
				$('#teacherContent > #contentContainer > .tipBox').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));

				});
			}

			function findThinkAbouts(){
				$('#teacherContent > #contentContainer > .thinkabout').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});	
			}

			function findQuote(){
				$('#teacherContent > #contentContainer > #ecaQuote').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findExcerpt(){
				$('#teacherContent > #contentContainer > .excerptSection').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findSelfCheck(){
				$('#teacherContent > #contentContainer > .selfcheck').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findSelfCheckMulti(){
				$('#teacherContent > #contentContainer > .selfcheckMulti').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findThinkNClick(){
				$('#teacherContent > #contentContainer > .thinkNclick').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findCompare(){
				$('#teacherContent > #contentContainer > .cncSection').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findVocab(){
				$('#teacherContent > #contentContainer > .vocabSection').each(function(i){
					objWrapper($(this))
					addToolbar($(this).closest('.railsObj'));
				});
			}

			function findChecklist(){
					$('#teacherContent > #contentContainer > .checkList').each(function(i){
						objWrapper($(this))
						addToolbar($(this).closest('.railsObj'));
					});
			}

			function objWrapper(obj){
		   		obj.wrap('<div class="railsObj"></div>');
		   }

			//add toolbar
			function addToolbar(obj){
				if(obj.hasClass('picture')){
					obj.prepend('<span class="toolbarImg"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
				}
				else if(obj.hasClass('ecaEmbed')){
					obj.prepend('<span class="toolbarImg"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
				}
					else if(obj.hasClass('ecaAudio')){
					obj.before('<span class="toolbarAudio"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
				}
				else{
					obj.prepend('<span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					obj.find('.toolbarP').next().addClass('objOutline');
				}
			}

			function addLimitedToolbar(obj){
				if(obj.parent().hasClass('railsSection')){
					obj.before('<span class="toolbarCC"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					obj.find('.toolbarCC').next().addClass('objOutline');
				}
				else{
					obj.before('<span class="toolbarCC"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-trash deleteBTN"></i></span>');
					obj.find('.toolbarCC').next().addClass('objOutline');
				}
			}

			function findObjects() {
			  findTitle()
			  findOverviewP()
			  findP()
			  findContentContainers()
			  findTOC()
			  findHR()
			  findH2()
			  findH3()
			  findLists()
			  findLabels()
			  findPictures()
			  findImgGrids()
			  findEmbeds()
			  findAudio()
			  findTipBoxes()
			  findThinkAbouts()
			  findQuote()
			  findExcerpt()
			  findSelfCheck()
			  findSelfCheckMulti()
			  findThinkNClick()
			  findCompare()
			  findVocab()
			  findChecklist()
			}

			$( document ).ready(function() {
			  findObjects()
			  $('body').append('<div class="window-popup"><div class="wp-content"><span class="alohaMenu"></span><div class="modal-content-contaier"></div><span class="closeSaveBtns"><a href"#" class="modal-button-close">Close</a><a href"#" class="modal-button-save">Save</a></span></div></div>');
			})

			//Button click functions
			$('.editBTN').on('click', editObj);
			$('.modal-button-close').on('click', closeModal);
			$('.modal-button-save').on('click',saveModal);
			$('.moveUpBTN').on('click', moveObjUp);
			$('.moveDownBTN').on('click',moveObjDown);
			$('.deleteBTN').on('click', deleteObj);
			$('.addBTN').on('click', addObj);

			function addObj(event){
				// var $target = $(event.target);
				// var targetParent = $target.parent();
				// var nextTarget = targetParent.next();
				// var nextTargetTagName = nextTarget.get(0).tagName;
 
				// if(targetParent.parent().attr('id') == 'contentContainer'){
				// 	targetParent.parent().next().after('<section style="background: rgb(247, 247, 247) none repeat scroll 0% 0%; display: block;" class="railsSection" id="contentContainer"><span class="toolbarCC"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span><h2><a class="anchorLoc" name="tempSection_' + counter + '"> New Section</a></h2><div class="railsObj"><span class="toolbarP"><br class="toolBarBR"><i class="fa fa-pencil editBTN"></i> <i class="fa fa-plus addBTN"></i> <i class="fa fa-arrow-up moveUpBTN"></i> <i class="fa fa-arrow-down moveDownBTN"></i> <i class="fa fa-trash deleteBTN"></i></span><p style="" class="objOutline">Add text here.</p></div></section>');
				// 	counter++;
				// 	$('html, body').animate({
				// 	    scrollTop: ($('.scrollToMarker').first().offset().top - 30)
				// 	},500);
				// 	$('.scrollToMarker').removeClass('scrollToMarker');
				// }
				// else{}
			}

			function editObj(event){
				var $target = $(event.target)
				var targetParent = $target.parent();
				var nextTarget = targetParent.next();
				var nextTargetTagName = nextTarget.get(0).tagName;

				if(nextTargetTagName == "P" && nextTarget.find('.label').length < 1 || nextTargetTagName == "H3" || nextTargetTagName == "OL" || nextTargetTagName == "UL"){
					createSimpleModal(nextTarget);
				}
				else if(targetParent.next().attr('id') == 'eca_Header'){
					createSimpleModal(targetParent.next().find('h1'))
				}
				else if(nextTarget.find('a').hasClass('anchorLoc')){
					createSimpleModal(nextTarget);
				}
				else if(nextTarget.find('.label').length > 0){
					nextTarget.addClass('editing')
					var label = {
						type: nextTarget.find('.label').attr('class'),
						data: [
							{	
								title: 'Title',
								content: nextTarget.find('.label').text()
							},
							{
								title: 'File Name',
								content: (nextTarget.find('.label').hasClass('default')) ? nextTarget.find('a').text() : undefined
							},
							{
								title: 'Link',
								content: nextTarget.find('a').attr('href')
							},
							{
								title: 'Instr',
								content: (nextTarget.text().indexOf(' - ') > 0) ? nextTarget.text().split(' - ')[1].replace(/\s+/g," ").replace(/(\r\n|\n|\r)/gm," ") : nextTarget.html().split('/span>')[1].split('</p>')[0].replace(/\s+/g," ").replace(/(\r\n|\n|\r)/gm," ")
								//nextTarget.text().split(' - ')[1].replace(/\s+/g," ").replace(/(\r\n|\n|\r)/gm," ")
							}
							
						]
					}
					createComplexModal(label)
				}
				else if(nextTarget.hasClass('tipBox')){
					nextTarget.addClass('editing')
					var tipBox = {
						type: 'Tip Box',
						data: [
							{	
								title: 'Title',
								content: nextTarget.find('h3').text()
							},
							{
								title: 'Tip',
								content: nextTarget.find('h3').nextAll().text().replace(/\s+/g, ' ')
							}
						]
					}
					createComplexModal(tipBox)
				}
				else if(nextTarget.hasClass('thinkabout')){
					nextTarget.addClass('editing')
					var thinkAbout = {
						type: 'Think About This...',
						data: [
							{	
								title: 'Title',
								content: nextTarget.find('h3').text()
							},
							{
								title: 'Question',
								content: nextTarget.find('.thinkabout_questions').find('h4').text()
							},
							{
								title: 'Body',
								content: nextTarget.find('.thinkabout_questions').html().split('</h4>')[1],
								htmlBlock: 'true'
							}
						]
					}
					createComplexModal(thinkAbout)
				}
				else if(nextTarget.hasClass('excerptSection')){
					nextTarget.addClass('editing')
					var excerptSection = {
						type: 'Excerpt',
						data: [
							{	
								title: 'Title',
								content: nextTarget.find('.excerptBody').find('h3').text()
							},
							{
								title: 'Quote',
								content: nextTarget.find('.excerptBody').find('hr').next().text()
							},
							{
								title: 'Source',
								content: nextTarget.find('.excerptBody').children().text()
							}
						]
					}
					createComplexModal(excerptSection)
				}
				else if(nextTarget.hasClass('selfcheck')){
					nextTarget.addClass('editing')
					var selfcheck = {
						type: 'Self Check',
						data: [
							{	
								title: 'Question',
								content: nextTarget.find('.question').find('h3').nextAll().text()
							},
							{
								title: 'Answer',
								content: nextTarget.find('.answer').text()
							},
						]
					}
					createComplexModal(selfcheck)
				}
				else if(nextTarget.hasClass('selfcheckMulti')){
					nextTarget.addClass('editing')
					var selfcheckMulti = {
						type: 'Self Check Multi',
						correctAns: nextTarget.find('.question').find('input[value=true]').attr('id').split('DqS_')[1],
						data: [
							{	
								title: 'Question',
								content: nextTarget.find('.question').find('.ecaDirections').next().text()
							}
						]
					}

					nextTarget.find('.question').find('label').each(function(i){
						selfcheckMulti.data.push({title: 'Choice '+(i+1), content: $(this).text(), htmlBlock: 'true'})
					});

					nextTarget.find('.answer').find('div').each(function(i){
						selfcheckMulti.data.push({title: 'Answer '+(i+1), content: $(this).text(), htmlBlock: 'true'})
					});

					createComplexModal(selfcheckMulti)
				}
				else if(nextTarget.hasClass('vocabSection')){
					nextTarget.addClass('editing')
					var vocabSection = {
						type: 'Vocab',
						data: [
							{	
								title: 'Question',
								content: nextTarget.find('.question').find('.ecaDirections').next().text()
							}
						]
					}

					var counter = 1;
					nextTarget.find('.vocabList').find('dt').each(function(i){
						vocabSection.data.push({title: 'Term '+(i+1), content: $(this).text()});
						counter++;
						vocabSection.data.push({title: 'Definition '+(i+1), content: $(this).next().text()});
						counter++;
					});
					counter = 0;

					createComplexModal(vocabSection)
				}
				else if(nextTarget.hasClass('thinkNclick')){
					nextTarget.addClass('editing')
					var thinkNclick = {
						type: 'Think-N-Click',
						data: [
							{	
								title: 'Directions',
								content: nextTarget.find('.ecaDirections').text()
							}
						]
					}

					var counter = 1;
					nextTarget.find('.thinkNclickList').find('.question').each(function(i){
						thinkNclick.data.push({title: 'Question '+(i+1), content: $(this).text(), htmlBlock: 'true'});
						counter++;
						thinkNclick.data.push({title: 'Answer '+(i+1), content: $(this).next().text(), htmlBlock: 'true'});
						counter++;
					});
					counter = 0;
					createComplexModal(thinkNclick)
				}
				else if(nextTarget.hasClass('cncSection')){
					nextTarget.addClass('editing')
					var cncSection = {
						type: 'Compare and Contrast',
						data: [
							{	
								title: 'Directions',
								content: nextTarget.find('.ecaDirections').text()
							}
						]
					}

					var counter = 1;
					nextTarget.find('.cncList').find('.question').each(function(i){
						cncSection.data.push({title: 'Question '+(i+1), content: $(this).text(), htmlBlock: 'true'});
						counter++;
						cncSection.data.push({title: 'Answer '+(i+1), content: $(this).next().text(), htmlBlock: 'true'});
						counter++;
					});
					counter = 0;
					createComplexModal(cncSection)
				}
				else if(nextTarget.hasClass('checkList')){
					nextTarget.addClass('editing')
					var checkList = {
						type: 'Checklist',
						data: [
							{	
								title: 'Statement',
								content: nextTarget.find('h3').next().text()
							}
						]
					}
					nextTarget.find('input').each(function(i){
						checkList.data.push({title: 'Item '+(i+1), content: $(this).parent().text()});
					});
					createComplexModal(checkList)
				}
				else{}


				
				//aloha button actions
				alohaCmds()
			}

			function createSimpleModal(obj){
				obj.addClass('editing');
				$('.alohaMenu').empty();
				$('.alohaMenu').append('<i id="bold-button" class="alohaMenuBtn fa fa-bold"></i> <i id="italic-button" class="alohaMenuBtn fa fa-italic"></i> <i id="underline-button" class="alohaMenuBtn fa fa-underline"></i> <i id="unformat-button" class="alohaMenuBtn fa fa-times"></i> <i id="paintBrush" class="alohaMenuBtn fa fa-paint-brush"></i>');
				$('.modal-content-contaier').empty();
				$('.modal-content-contaier').append(obj.clone().addClass('editable').css("background-color", ""));
				$('.window-popup').fadeIn(250);
				killBackspace()
				aloha.dom.query('.editable', document).forEach(aloha);
			}

			function createComplexModal(obj){
				var $alohaMenu = $('.alohaMenu');
				var $modal = $('.window-popup')
				$alohaMenu.empty();
				$modal.find('.modal-content-contaier').empty();

				$modal.find('.modal-content-contaier').append('<h1>'+obj.type+'</h1><br>')
				for (i = 0; i < obj.data.length; i++){
					if(obj.data[i].content != undefined && obj.data[i].content.length > 0){
						if(obj.data[i].htmlBlock == 'true'){
							$modal.find('.modal-content-contaier').append('<span class="modalLabel">'+obj.data[i].title+'</span><div class="editable">'+obj.data[i].content+'</div><br>');
							aloha.dom.query('.editable', document).forEach(aloha);
						}
						else{
							$modal.find('.modal-content-contaier').append('<span class="modalLabel">'+obj.data[i].title+'</span><br><input class="railsModalInput" id="modalInput_'+i+'" width="100px" value="'+obj.data[i].content+'"></input><br>');
						}
					}
					else{}
				}
				if(obj.correctAns){
					$modal.find('.modal-content-contaier').append('<span class="modalLabel">Correct Answer</span><form><input name="selfCheckMultiRadio" type="radio" id="Choice_1"> Choice 1<br><input name="selfCheckMultiRadio" type="radio" id="Choice_2"> Choice 2<br><input name="selfCheckMultiRadio" type="radio" id="Choice_3"> Choice 3<br><input name="selfCheckMultiRadio" type="radio" id="Choice_4"> Choice 4<br></form>')
					$modal.find('#Choice_'+obj.correctAns+'').prop('checked', true);
				}
				else{}
			
				$modal.fadeIn(250);
			}

			function closeModal(event){
				var r = confirm("Are you sure?");
				    if (r == true) {
				        $('.window-popup').fadeOut(250);
				        $('.editing').removeClass('editing')
				    } else {
				        
				    }
			}

			function saveModal(event){
				var $modalContent = $('.modal-content-contaier')
				var $input_1 = $('#modalInput_0')
				var $input_2 = $('#modalInput_1')
				var $input_3 = $('#modalInput_2')
				var $input_4 = $('#modalInput_3')
				if($modalContent.find('h1').text() == 'label default'){
					render('<p class="objOutline"> <span class="label default">'+$input_1.val()+'</span> <a href='+$input_3.val()+'>'+$input_2.val()+'</a> - '+$input_4.val()+'</p>')
				}
				else if($modalContent.find('h1').text() == 'label new'){
					// $target.replaceWith('<p class="objOutline"><span class="label default">'+$('#modalInput_0').val()+'</span> <a href='+$('#modalInput_2').val()+'>'+$('#modalInput_1').val()+'</a> - '+$('#modalInput_3').val()+'</p>')
					// $target.removeClass('editing').removeClass('editable').removeClass('aloha-editable');
					$('.window-popup').fadeOut(250);
				}
				else if($modalContent.find('h1').text() == 'label important'){
					render('<p class="objOutline"><span class="label important">'+$input_1.val()+'</span> '+$input_4.val()+'</p>')
				}
				else if($modalContent.find('h1').text() == 'label warning'){
					render('<p class="objOutline"><span class="label warning">'+$input_1.val()+'</span> '+$input_4.val()+'</p>')
				}
				else if($modalContent.find('h1').text() == 'label notice'){
					render('<p class="objOutline"><span class="label notice">'+$input_1.val()+'</span> '+$input_4.val()+'</p>')
				}
				else if($modalContent.find('h1').text() == 'Tip Box'){
					render('<section class="tipBox objOutline"><h3>'+$input_1.val()+'</h3><p>'+$input_2.val()+'</p></section>')
				}
				else if($modalContent.find('h1').text() == 'Think About This...'){
					render('<section class="thinkabout objOutline"><div class="thinkabout_head"><h3>'+$input_1.val()+'</h3></div><div class="thinkabout_questions"><h4>'+$input_2.val()+'</h4>'+$('.editable').html()+'</div></section>')
				}
				else if($modalContent.find('h1').text() == 'Excerpt'){
					render('<section class="excerptSection objOutline"><div class="excerptBody"><h3>'+$input_1.val()+'</h3><p>'+$input_2.val()+'</p><hr><p><em>'+$input_3.val()+'</em></p></div></section>')
				}
				else if($modalContent.find('h1').text() == 'Self Check'){
					render('<section class="selfcheck objOutline"><div class="question"><h3>Self Check</h3><p>'+$input_1.val()+'</p></div><div class="answer"><p>'+$input_2.val()+'</p></div></section>')
				}
				else if($modalContent.find('h1').text() == 'Self Check Multi'){
					var counter_a = 1;
					var scmQuestion = $modalContent.find('.question').find('h3').next();
					var scmChoices = '';
					var scmAnswers = '';
					$modalContent.find('span:contains("Choice")').each(function(){
						scmChoices = scmChoices +' <input id="ecaSCM_ioMrID8_'+counter_a+'" name="ecaSCM_ioMrID8_rg" value="'+$modalContent.find('form').find('#Choice_'+counter_a+':checked').val()+'" onclick="eca_SCM_click("ecaSCM_ioMrID8_'+counter_a+'");"type="radio"><label for="ecaSCM_ioMrID8_'+counter_a+'">'+$(this).next()+'</label><br>';
						counter_a++;
					});
					counter_a = 1;
					$modalContent.find('span:contains("Answer")').each(function(){
						scmAnswers = scmAnswers + '<div id="ecaSCM_ioMrID8_'+counter_a+'a">'+$(this).next()+'</div>';
						counter_a++;
					});
					render('<section class="selfcheckMulti" id="ecaSCM_ioMrID8"><div class="question">'+scmQuestion+scmChoices+'</div><div class="answer">'+scmAnswers+'</div></section>')
				}
				else if($modalContent.find('h1').text() == 'Vocab'){
					render('')
				}
				else if($modalContent.find('h1').text() == 'Think-N-Click'){
					render('')
				}
				else if($modalContent.find('h1').text() == 'Compare and Contrast'){
					render('')
				}
				else if($modalContent.find('h1').text() == 'Checklist'){
					render('')
				}
				else{
					render($modalContent.html())
				}
			}

			function render(newHTML){
				var $target = $('.editing')
				$target.replaceWith(newHTML)
				$target.removeClass('editing').removeClass('editable').removeClass('aloha-editable');
				$('.window-popup').fadeOut(250);
			}

			function moveObjUp(event){
				var $target = $(event.target);
				var savedSection = $target.closest('.railsSection');
				var savedHR = $target.closest('.railsSection').next();
				var savedElement = $target.closest('.railsObj');

				if($target.parent().next().find('a').hasClass('anchorLoc')){
					if(savedSection.prev().prev().hasClass('railsSection')){
					 	savedSection.fadeToggle(150, "linear", function(){
							savedSection.insertBefore($(this).prev().prev('.railsSection')).fadeToggle(150, "linear");
							savedHR.insertAfter($(this));

						});
					}else{
						$target.closest('.railsSection').effect("shake")
					}
				}
				else{
					if(savedElement.prev().hasClass('railsObj')){
					 	savedElement.fadeToggle(150, "linear", function(){
							savedElement.insertBefore($(this).prev('.railsObj')).fadeToggle(150, "linear");
						});
					}else{
						$target.closest('.railsObj').effect("shake")
					}
				}
				
			}

			function moveObjDown(event){
				// var $target = $(event.target);
				// var savedElement = $target.closest('.railsObj');
				// if(savedElement.next().hasClass('railsObj')){
				// 	savedElement.fadeToggle(150, "linear", function(){
				// 	savedElement.insertAfter($(this).next('.railsObj')).fadeToggle(150, "linear");
				// });
				// }else{
				// 	$target.closest('.railsObj').effect("shake")
				// }

				var $target = $(event.target);
				var savedSection = $target.closest('.railsSection');
				var savedHR = $target.closest('.railsSection').next();
				var savedElement = $target.closest('.railsObj');

				if($target.parent().next().find('a').hasClass('anchorLoc')){
					if(savedSection.next().next().hasClass('railsSection')){
					 	savedSection.fadeToggle(150, "linear", function(){
							savedSection.insertAfter($(this).next().next('.railsSection')).fadeToggle(150, "linear");
							savedHR.insertBefore($(this));

						});
					}else{
						$target.closest('.railsSection').effect("shake")
					}
				}
				else{
					if(savedElement.next().hasClass('railsObj')){
						savedElement.fadeToggle(150, "linear", function(){
						savedElement.insertAfter($(this).next('.railsObj')).fadeToggle(150, "linear");
					});
					}else{
						$target.closest('.railsObj').effect("shake")
					}
				}
			}

			function deleteObj(event){
				var $target = $(event.target)
				var r = confirm("Are you sure?");

				if($target.parent().next().find('a').hasClass('anchorLoc')){
					if (r == true) {
						$target.closest('#contentContainer').next('hr').fadeOut(250,"linear", function(){
					        	$target.remove();
					        });
						$target.closest('#contentContainer').fadeOut(250,"linear", function(){
					        	$target.remove();
					        });
					} else {
				        
				    }
				}
				else if($target.closest('section').attr('id') == 'eca_overview'){
					if (r == true) {
				        $target.parent().parent().remove();
				    } else {
				        
				    }
				}
				else{
				    if (r == true) {
				        $target.closest('.railsObj').fadeOut(250,"linear", function(){
				        	$target.remove();
				        });
				    } else {
				        
				    }
				}
			}

			//Indicate section mouseover
			$('.toolbarTitle').mouseover(function(i){
				$(this).next().find('h1').css("background-color", "#D6D6D6");
			});
			$('.toolbarTitle').mouseout(function(i){
				$(this).next().find('h1').css("background-color", "");
			});
			$('.toolbarOverviewP').mouseover(function(i){
				$(this).next().css("background-color", "#D6D6D6");
			});
			$('.toolbarOverviewP').mouseout(function(i){
				$(this).next().css("background-color", "");
			});

			$('.toolbarP').mouseover(function(i){
				$(this).next().css("background-color", "#D6D6D6");
			});
			$('.toolbarP').mouseout(function(i){
				$(this).next().css("background-color", "");
			});
			$('.toolbarCC').mouseover(function(i){
				$(this).closest('.railsSection').css('background','#D6D6D6');
			});
			$('.toolbarCC').mouseout(function(i){
				$(this).closest('.railsSection').css('background', '#F7F7F7');
			});
			$('.toolbarP').click(function(){
				$(this).next().css("background-color", "");
			});

			function alohaCmds(){
				//native
				$('#bold-button').on('click', aloha.ui.command(aloha.ui.commands.bold));
				$('#italic-button').on('click', aloha.ui.command(aloha.ui.commands.italic));
				$('#underline-button').on('click', aloha.ui.command(aloha.ui.commands.underline));
				$('#unformat-button').on('click', aloha.ui.command(aloha.ui.commands.unformat));
			}

			function killBackspace(){
				$(document).on("keydown", function (e) {
				    if (e.which === 8) {
				        e.preventDefault();
				    }
				});
			}

			$('#loadingImg').fadeOut(250);
		})//end aloha.min.js load
	})//end jquery-ui.js load
})()
