var svgIconConfig = {
	tree : { 
		url : '../../img/tree-4.svg',
		animation : [
			{ 
				el : 'path:nth-child(2)', 
				animProperties : { 
					from : { val : '{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r630 32 32"}' } 
				} 
			},
			{ 
				el : 'path:nth-child(3)', 
				animProperties : { 
					from : { val :'{"transform" : "r0 32 32"}' }, 
					to : { val : '{"transform" : "r80 32 32"}' } 
				} 
			},
		]
	}
};