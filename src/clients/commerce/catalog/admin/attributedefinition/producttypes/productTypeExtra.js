

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../../../../constants');


module.exports = function(Client){
	return Client.sub({
		getExtras :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras'
		}),
		getExtra :Client.method({
			method: constants.verbs.GET,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras/{attributeFQN}?responseFields={responseFields}'
		}),
		addExtra :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras?responseFields={responseFields}'
		}),
		updateExtra :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras/{attributeFQN}?responseFields={responseFields}'
		}),
		deleteExtra :Client.method({
			method: constants.verbs.DELETE,
			url: '{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras/{attributeFQN}'
		})	
	});
};