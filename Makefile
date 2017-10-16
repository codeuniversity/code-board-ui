all:
	@mkdir src/components/$(component)
	@touch src/components/$(component)/$(component).js
	@touch src/components/$(component)/$(component).css
	@mkdir src/components/__fixtures__/$(component)
	@touch src/components/__fixtures__/$(component)/$(component)Fix.js
	@echo "export default {" >> src/components/__fixtures__/$(component)/$(component)Fix.js
	@echo "	props:{}," >> src/components/__fixtures__/$(component)/$(component)Fix.js
	@echo "	state:{}," >> src/components/__fixtures__/$(component)/$(component)Fix.js
	@echo "	children:null}" >> src/components/__fixtures__/$(component)/$(component)Fix.js
	@echo "import React from 'react';" >> src/components/$(component)/$(component).js
	@echo "import './$(component).css';" >> src/components/$(component)/$(component).js
	@echo "" >> src/components/$(component)/$(component).js
	@echo "class $(component) extends React.Component{" >> src/components/$(component)/$(component).js
	@echo "	render(){" >> src/components/$(component)/$(component).js
	@echo "		return(<div></div>)" >> src/components/$(component)/$(component).js
	@echo "	}" >> src/components/$(component)/$(component).js
	@echo "}" >> src/components/$(component)/$(component).js
	@echo "export default $(component)" >> src/components/$(component)/$(component).js 
	@echo "Built Component '$(component)' "
	@echo "Look into 'src/components/$(component)' "
	@echo "And 'src/components/__fixtures__/$(component)' "