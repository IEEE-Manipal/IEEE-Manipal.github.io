if (self.CavalryLogger) { CavalryLogger.start_js(["8cGBF"]); }

__d('SignalsTrackingSelector.react',['cx','immutable','React','SignalsTrackingCard.react','SignalsTrackingUtil','SUISelector.react','SUISelectorOption.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('immutable').List,l=c('React').PureComponent,m=300;i=babelHelpers.inherits(n,l);j=i&&i.prototype;n.prototype.render=function(){var o=this.props,p=o.signalsObjects,q=o.idLabel,r=[],s=c('SignalsTrackingUtil').sortSignalsList(p);s.forEach(function(t){r.push(c('React').createElement(c('SUISelectorOption.react'),{key:t.id,value:t.id},c('React').createElement(c('SignalsTrackingCard.react'),{idLabel:q,name:t.name,status:t.status,value:t.id})));});return (c('React').createElement('div',null,c('React').createElement(c('SUISelector.react'),{className_DEPRECATED:"_hce",value:this.props.selectedID,width:this.props.width||m,onChange:this.props.onSelectSource},r)));};function n(){i.apply(this,arguments);}f.exports=n;}),null);