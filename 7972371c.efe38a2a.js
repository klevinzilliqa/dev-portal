(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{203:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),s=(t(0),t(294)),o={id:"rosetta-data-block-transaction",title:"Transaction",keywords:["rosetta","middleware","exchanges","zilliqa","API","contruction"],description:"Transaction"},i={id:"exchanges/rosetta-data-block-transaction",isDocsHomePage:!1,title:"Transaction",description:"Transaction",source:"@site/docs/exchanges/rosetta-data-block transaction.md",permalink:"/docs/exchanges/rosetta-data-block-transaction",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/exchanges/rosetta-data-block transaction.md",sidebar:"ExchangesSidebar",previous:{title:"Block",permalink:"/docs/exchanges/rosetta-data-block"},next:{title:"Mempool",permalink:"/docs/exchanges/rosetta-data-mempool"}},c=[{value:"Get a Block Transaction - Payment",id:"get-a-block-transaction---payment",children:[{value:"Displaying Contract Calls Information for Block Transactions",id:"displaying-contract-calls-information-for-block-transactions",children:[]}]}],d={rightToc:c};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("hr",null),Object(s.b)("h2",{id:"get-a-block-transaction---payment"},"Get a Block Transaction - Payment"),Object(s.b)("p",null,"Request:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "network_identifier": {\n        "blockchain": "zilliqa",\n        "network": "testnet"\n    },\n    "block_identifier": {\n        "index": 1582509,\n        "hash": "4cc2adbb6fe5f14952b1a7043b0a3fb0a33016fe0de99d1bc2102f349e3cd3ad"\n    },\n    "transaction_identifier": {\n        "hash": "e03a4dcfce78a7f40a686969260bef57e0e18cead8fa1b60df05edfd69c80415"\n    }\n}\n')),Object(s.b)("p",null,"Response:"),Object(s.b)("p",null,"Sample\n",Object(s.b)("strong",{parentName:"p"},"Note"),": The operation type is ",Object(s.b)("inlineCode",{parentName:"p"},"transfer"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "transaction": {\n        "transaction_identifier": {\n            "hash": "e03a4dcfce78a7f40a686969260bef57e0e18cead8fa1b60df05edfd69c80415"\n        },\n        "operations": [\n            {\n                "operation_identifier": {\n                    "index": 0\n                },\n                "type": "transfer",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil17z645g0dr8nwgs5r8tafyekpv6kk882nxaqr70",\n                    "metadata": {\n                        "base16": "F0b55a21ED19E6E442833Afa9266C166aD639d53"\n                    }\n                },\n                "amount": {\n                    "value": "-300000000000000",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                }\n            },\n            {\n                "operation_identifier": {\n                    "index": 1\n                },\n                "related_operations": [\n                    {\n                        "index": 0\n                    }\n                ],\n                "type": "transfer",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil1yz8putzpxrjrlrcn9xukwe6fyeg9jlyjmnw70a",\n                    "metadata": {\n                        "base16": "208E1e2c4130E43F8F1329B96767492650597C92"\n                    }\n                },\n                "amount": {\n                    "value": "300000000000000",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                },\n                "metadata": {\n                    "gasLimit": "1",\n                    "gasPrice": "1000000000",\n                    "nonce": "138",\n                    "receipt": {\n                        "accept": false,\n                        "errors": null,\n                        "exceptions": null,\n                        "success": true,\n                        "cumulative_gas": "1",\n                        "epoch_num": "1582509",\n                        "event_logs": null,\n                        "transitions": null\n                    },\n                    "senderPubKey": "0x027558EDE7BA1EA7A7633F1ACA898CE3DE0F7589C6B5D8C30D91EDE457F6E552F6",\n                    "signature": "0x9795884BD13CF195334B5D8E79A425C1582CF8D481091F64840D11BBC19EC893444021C1793AF242703823CF4FCC29E72060D79EEAB0478D9334A73F173A97A4",\n                    "version": "21823489"\n                }\n            }\n        ]\n    }\n}\n')),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Get a Block Transaction - Contract Deployment")),Object(s.b)("p",null,"Request:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "network_identifier": {\n        "blockchain": "zilliqa",\n        "network": "mainnet"\n    },\n    "block_identifier": {\n        "index": 670379,\n        "hash": "e71a6d73ec69accb63cb77e67ce6bdde92e6de5a9f1981d8cd9f2f4630031a7b"\n    },\n    "transaction_identifier": {\n        "hash": "5a3662d689468b423f050824c93343b790a7295d44a4e0f5ebee119ecc18d065"\n    }\n}\n')),Object(s.b)("p",null,"Response:"),Object(s.b)("p",null,"Sample\n",Object(s.b)("strong",{parentName:"p"},"Note"),": The operation type is ",Object(s.b)("inlineCode",{parentName:"p"},"contract_deployment"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "transaction": {\n        "transaction_identifier": {\n            "hash": "5a3662d689468b423f050824c93343b790a7295d44a4e0f5ebee119ecc18d065"\n        },\n        "operations": [\n            {\n                "operation_identifier": {\n                    "index": 0\n                },\n                "type": "contract_deployment",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil1a35lxvh38y3u8xe7kzxfkgdhmctj387zs92llt",\n                    "metadata": {\n                        "base16": "ec69F332F13923C39B3eB08c9b21B7De17289FC2"\n                    }\n                },\n                "amount": {\n                    "value": "0",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                },\n                "metadata": {\n                    "code": "\\nscilla_version 0\\nimport BoolUtils\\nlibrary ResolverLib\\ntype RecordKeyValue =\\n  | RecordKeyValue of String String\\nlet nilMessage = Nil {Message}\\nlet oneMsg =\\n  fun(msg: Message) =>\\n    Cons {Message} msg nilMessage\\nlet eOwnerSet =\\n  fun(address: ByStr20) =>\\n    {_eventname: \\"OwnerSet\\"; address: address}\\n(* @deprecated eRecordsSet is emitted instead (since 0.1.1) *)\\nlet eRecordSet =\\n  fun(key: String) =>\\n  fun(value: String) =>\\n    {_eventname: \\"RecordSet\\"; key: key; value: value}\\n(* @deprecated eRecordsSet is emitted instead (since 0.1.1) *)\\nlet eRecordUnset =\\n  fun(key: String) =>\\n    {_eventname: \\"RecordUnset\\"; key: key}\\nlet eRecordsSet =\\n  fun(registry: ByStr20) =>\\n  fun(node: ByStr32) =>\\n    {_eventname: \\"RecordsSet\\"; registry: registry; node: node}\\nlet eError =\\n  fun(message: String) =>\\n    {_eventname: \\"Error\\"; message: message}\\nlet emptyValue = \\"\\"\\nlet mOnResolverConfigured =\\n  fun(registry: ByStr20) =>\\n  fun(node: ByStr32) =>\\n    let m = {_tag: \\"onResolverConfigured\\"; _amount: Uint128 0; _recipient: registry; node: node} in\\n      oneMsg m\\nlet copyRecordsFromList =\\n  fun (recordsMap: Map String String) =>\\n  fun (recordsList: List RecordKeyValue) =>\\n    let foldl = @list_foldl RecordKeyValue Map String String in\\n      let iter =\\n        fun (recordsMap: Map String String) =>\\n        fun (el: RecordKeyValue) =>\\n          match el with\\n          | RecordKeyValue key val =>\\n            let isEmpty = builtin eq val emptyValue in\\n              match isEmpty with\\n              | True => builtin remove recordsMap key\\n              | False => builtin put recordsMap key val\\n              end\\n          end\\n      in\\n        foldl iter recordsMap recordsList\\ncontract Resolver(\\n  initialOwner: ByStr20,\\n  registry: ByStr20,\\n  node: ByStr32,\\n  initialRecords: Map String String\\n)\\nfield vendor: String = \\"UD\\"\\nfield version: String = \\"0.1.1\\"\\nfield owner: ByStr20 = initialOwner\\nfield records: Map String String = initialRecords\\n(* Sets owner address *)\\n(* @ensures a sender address is an owner of the contract *)\\n(* @param address *)\\n(* @emits OwnerSet if the operation was successful *)\\n(* @emits Error if a sender address has no permission for the operation *)\\ntransition setOwner(address: ByStr20)\\n  currentOwner <- owner;\\n  isOkSender = builtin eq currentOwner _sender;\\n  match isOkSender with\\n  | True =>\\n    owner := address;\\n    e = eOwnerSet address;\\n    event e\\n  | _ =>\\n    e = let m = \\"Sender not owner\\" in eError m;\\n    event e\\n  end\\nend\\n(* Sets a key value pair *)\\n(* @ensures a sender address is an owner of the contract *)\\n(* @param key *)\\n(* @param value *)\\n(* @emits RecordSet if the operation was successful *)\\n(* @emits Error if a sender address has no permission for the operation *)\\n(* @sends onResolverConfigured to the registry *)\\ntransition set(key: String, value: String)\\n  currentOwner <- owner;\\n  isOkSender = builtin eq currentOwner _sender;\\n  match isOkSender with\\n  | True =>\\n    records[key] := value;\\n    e = eRecordsSet registry node;\\n    event e;\\n    msgs = mOnResolverConfigured registry node;\\n    send msgs\\n  | _ =>\\n    e = let m = \\"Sender not owner\\" in eError m;\\n    event e\\n  end\\nend\\n(* Remove a key from records map *)\\n(* @ensures a sender address is an owner of the contract *)\\n(* @param key *)\\n(* @emits RecordUnset if the operation was successful *)\\n(* @emits Error if a sender address has no permission for the operation *)\\n(* @sends onResolverConfigured to the registry *)\\ntransition unset(key: String)\\n  keyExists <- exists records[key];\\n  currentOwner <- owner;\\n  isOk =\\n    let isOkSender = builtin eq currentOwner _sender in\\n      andb isOkSender keyExists;\\n  match isOk with\\n  | True =>\\n    delete records[key];\\n    e = eRecordsSet registry node;\\n    event e;\\n    msgs = mOnResolverConfigured registry node;\\n    send msgs\\n  | _ =>\\n    e = let m = \\"Sender not owner or key does not exist\\" in\\n      eError m;\\n    event e\\n  end\\nend\\n(* Set multiple keys to records map *)\\n(* Removes records from the map if according passed value is empty *)\\n(* @ensures a sender address is an owner of the contract *)\\n(* @param newRecords *)\\n(* @emits RecordsSet if the operation was successful *)\\n(* @emits Error if a sender address has no permission for the operation *)\\n(* @sends onResolverConfigured to the registry *)\\ntransition setMulti(newRecords: List RecordKeyValue)\\n  currentOwner <- owner;\\n  isOkSender = builtin eq currentOwner _sender;\\n  match isOkSender with\\n  | True =>\\n    oldRecords <- records;\\n    newRecordsMap = copyRecordsFromList oldRecords newRecords;\\n    records := newRecordsMap;\\n    e = eRecordsSet registry node;\\n    event e;\\n    msgs = mOnResolverConfigured registry node;\\n    send msgs\\n  | _ =>\\n    e = let m = \\"Sender not owner\\" in eError m;\\n    event e\\n  end\\nend\\n",\n                    "data": "[{\\"vname\\":\\"_scilla_version\\",\\"type\\":\\"Uint32\\",\\"value\\":\\"0\\"},{\\"vname\\":\\"initialOwner\\",\\"type\\":\\"ByStr20\\",\\"value\\":\\"0x4887fb6920a8ae50886543ee8aa504da6c9f83bf\\"},{\\"vname\\":\\"registry\\",\\"type\\":\\"ByStr20\\",\\"value\\":\\"0x9611c53be6d1b32058b2747bdececed7e1216793\\"},{\\"vname\\":\\"node\\",\\"type\\":\\"ByStr32\\",\\"value\\":\\"0xd72c3c6e1e3b1b1238b5ba82ff7afe688f542b1cdbfee692a912dd88b1d31f76\\"},{\\"vname\\":\\"initialRecords\\",\\"type\\":\\"Map String String\\",\\"value\\":[{\\"key\\":\\"ZIL\\",\\"val\\":\\"0x803637d03997e4c29729e9ce9e4bc41c0c867354\\"}]}]",\n                    "gasLimit": "10000",\n                    "gasPrice": "1000000000",\n                    "nonce": "2007",\n                    "receipt": {\n                        "accept": false,\n                        "errors": null,\n                        "exceptions": null,\n                        "success": true,\n                        "cumulative_gas": "6024",\n                        "epoch_num": "670379",\n                        "event_logs": null,\n                        "transitions": null\n                    },\n                    "senderPubKey": "0x032E38FCA06A680FFE1BA40956ADA08CB94236FC985B4F7571D455408A0A27E1A2",\n                    "signature": "0xB665902059A7519F9A8E118B87ACE4EFDC0FB434475617B19B94E38ABAB68AE8DC85650E781C52CBE281FA527E7556EE9BC593531743A3594BF25C4330EC0165",\n                    "version": "65537"\n                }\n            }\n        ]\n    }\n}\n')),Object(s.b)("h3",{id:"displaying-contract-calls-information-for-block-transactions"},"Displaying Contract Calls Information for Block Transactions"),Object(s.b)("p",null,"A contract call can be defined in the either one of the following two forms:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"An account has invoked a function in a contract"),Object(s.b)("li",{parentName:"ol"},"An account has invoked a function in a contract which further invokes another function in a different contract (a.k.a Chain Calling)")),Object(s.b)("p",null,"Depending on the functions invoked by the contract, a contract call may perform additional smart contract deposits to some accounts.\nThese smart contract deposits will be shown under the ",Object(s.b)("inlineCode",{parentName:"p"},"operations []")," idential to how typical payment transaction is displayed.\nAdditional metadata information related to the transaction such as the ",Object(s.b)("em",{parentName:"p"},"contract address")," and ",Object(s.b)("em",{parentName:"p"},"gas amount")," are displayed only at the ",Object(s.b)("strong",{parentName:"p"},"final operation block")," to reduce cluttering of metadata."),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Get a Block Transaction - Contract Call without Smart Contract Deposits")),Object(s.b)("p",null,"Request:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "network_identifier": {\n        "blockchain": "zilliqa",\n        "network": "testnet"\n    },\n    "block_identifier": {\n        "index": 1558244,\n        "hash": "4f00a6059b22ebd73e6a60d77fbc20f65bfa3be3f5ae57712422699e3bb031ac"\n    },\n    "transaction_identifier": {\n        "hash": "ad8a8aa7c1aff0a59a3d56f9c9a72176c344e8a35bbd66e69b2bc7011b44e637"\n    }\n}\n')),Object(s.b)("p",null,"Response:"),Object(s.b)("p",null,"Sample\n",Object(s.b)("strong",{parentName:"p"},"Note"),": The operation type is ",Object(s.b)("inlineCode",{parentName:"p"},"contract_call"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "transaction": {\n        "transaction_identifier": {\n            "hash": "ad8a8aa7c1aff0a59a3d56f9c9a72176c344e8a35bbd66e69b2bc7011b44e637"\n        },\n        "operations": [\n            {\n                "operation_identifier": {\n                    "index": 0\n                },\n                "type": "contract_call",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil1ha4z3qu69uxr6h2m7v9ggcjt332cjupzp7c2ae",\n                    "metadata": {\n                        "base16": "Bf6a28839a2f0c3d5d5Bf30A84624B8c55897022"\n                    }\n                },\n                "amount": {\n                    "value": "0",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                },\n                "metadata": {\n                    "contractAddress": "c36087407e6474e038d7c316a620afe2a752ad0e",\n                    "data": "{\\"_tag\\":\\"SubmitHeaderBlock\\",\\"params\\":[{\\"vname\\":\\"new_hash\\",\\"type\\":\\"ByStr32\\",\\"value\\":\\"0x62c8b569f485f22878f8b31f6e159981be4ea78bdeb09062fbcdcbc4802deae2\\"},{\\"vname\\":\\"block\\",\\"type\\":\\"Uint64\\",\\"value\\":\\"178656\\"}]}",\n                    "gasLimit": "40000",\n                    "gasPrice": "1000000000",\n                    "nonce": "352",\n                    "receipt": {\n                        "accept": false,\n                        "errors": null,\n                        "exceptions": null,\n                        "success": true,\n                        "cumulative_gas": "841",\n                        "epoch_num": "1558244",\n                        "event_logs": [\n                            {\n                                "_eventname": "SubmitHashSuccess",\n                                "address": "0xc36087407e6474e038d7c316a620afe2a752ad0e",\n                                "params": [\n                                    {\n                                        "type": "ByStr32",\n                                        "value": "0x62c8b569f485f22878f8b31f6e159981be4ea78bdeb09062fbcdcbc4802deae2",\n                                        "vname": "hash"\n                                    },\n                                    {\n                                        "type": "Int32",\n                                        "value": "2",\n                                        "vname": "code"\n                                    }\n                                ]\n                            }\n                        ],\n                        "transitions": null\n                    },\n                    "senderPubKey": "0x025A5A6AFBB5797E44F29FEFA81B43EB3600C70F021B78ABCE7CF2D4D01D467AFF",\n                    "signature": "0xA9FA2B79A0927B544528693D51BB7FCAD1E283146310CE3B12167EAA982AF69EB879942A8310D66F4D5E46655C930DFB4664861435F7CCC2E3DACA653A3966FF",\n                    "version": "21823489"\n                }\n            }\n        ]\n    }\n}\n')),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Get a Block Transaction - Contract Call with Smart Contract Deposits (With Chain Calls)")),Object(s.b)("p",null,"Request:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "network_identifier": {\n        "blockchain": "zilliqa",\n        "network": "testnet"\n    },\n    "block_identifier": {\n        "index": 1406004,\n        "hash": "84c14dc0685e01b3c7d06f2f2dd9198880b182a82d16ed62a67752560badc6b7"\n    },\n    "transaction_identifier": {\n        "hash": "17c46c252569a4f3fc41ae45fc6a898892b3f75dde11d517f8b7a037caf658e3"\n    }\n}\n')),Object(s.b)("p",null,"Response:"),Object(s.b)("p",null,"Sample\n",Object(s.b)("strong",{parentName:"p"},"Note"),": The operation type is ",Object(s.b)("inlineCode",{parentName:"p"},"contract_call"),", follow by ",Object(s.b)("inlineCode",{parentName:"p"},"contract_call_transfer")," for subsequent operations with a smart contract deposits."),Object(s.b)("p",null,"In the sample, the sequence of operations are as follows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Initiator ",Object(s.b)("inlineCode",{parentName:"li"},"zil16ura3fhsf84h60s7w6xjy4u2wxel892n7sq5dp")," -> Contract ",Object(s.b)("inlineCode",{parentName:"li"},"zil135gsjk2wqxwecn00axm2s40ey6g6ne8668046h")," (invokes a contract call to add funds)"),Object(s.b)("li",{parentName:"ul"},"Contract ",Object(s.b)("inlineCode",{parentName:"li"},"zil135gsjk2wqxwecn00axm2s40ey6g6ne8668046h")," (",Object(s.b)("inlineCode",{parentName:"li"},"8d1109594e019d9c4defe9b6a855f92691a9e4fa"),") -> Recipient ",Object(s.b)("inlineCode",{parentName:"li"},"zil12n6h5gqhlpw87gtzlqe5sq5r7pq2spj8x2g8pe")," (amount is deducted from contract balance and trasnferred to recipient)")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "transaction": {\n        "transaction_identifier": {\n            "hash": "17c46c252569a4f3fc41ae45fc6a898892b3f75dde11d517f8b7a037caf658e3"\n        },\n        "operations": [\n            {\n                "operation_identifier": {\n                    "index": 0\n                },\n                "type": "contract_call",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil16ura3fhsf84h60s7w6xjy4u2wxel892n7sq5dp",\n                    "metadata": {\n                        "base16": "d707D8a6F049Eb7d3E1e768D22578A71b3f39553"\n                    }\n                },\n                "amount": {\n                    "value": "0",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                }\n            },\n            {\n                "operation_identifier": {\n                    "index": 1\n                },\n                "related_operations": [\n                    {\n                        "index": 0\n                    }\n                ],\n                "type": "contract_call_transfer",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil135gsjk2wqxwecn00axm2s40ey6g6ne8668046h",\n                    "metadata": {\n                        "base16": "8D1109594E019D9C4DEFe9b6A855F92691A9E4fA"\n                    }\n                },\n                "amount": {\n                    "value": "-123073860347289351",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                }\n            },\n            {\n                "operation_identifier": {\n                    "index": 2\n                },\n                "related_operations": [\n                    {\n                        "index": 1\n                    }\n                ],\n                "type": "contract_call_transfer",\n                "status": "SUCCESS",\n                "account": {\n                    "address": "zil12n6h5gqhlpw87gtzlqe5sq5r7pq2spj8x2g8pe",\n                    "metadata": {\n                        "base16": "54F57A2017F85c7F2162f833480283f040a80647"\n                    }\n                },\n                "amount": {\n                    "value": "123073860347289351",\n                    "currency": {\n                        "symbol": "ZIL",\n                        "decimals": 12\n                    }\n                },\n                "metadata": {\n                    "contractAddress": "8d1109594e019d9c4defe9b6a855f92691a9e4fa",\n                    "data": "{\\"_tag\\": \\"AddFunds\\", \\"params\\": []}",\n                    "gasLimit": "10000",\n                    "gasPrice": "1000000000",\n                    "nonce": "8",\n                    "receipt": {\n                        "accept": false,\n                        "errors": null,\n                        "exceptions": null,\n                        "success": true,\n                        "cumulative_gas": "1402",\n                        "epoch_num": "1406004",\n                        "event_logs": [\n                            {\n                                "_eventname": "Verifier add funds",\n                                "address": "0x54f57a2017f85c7f2162f833480283f040a80647",\n                                "params": [\n                                    {\n                                        "type": "ByStr20",\n                                        "value": "0xd707d8a6f049eb7d3e1e768d22578a71b3f39553",\n                                        "vname": "verifier"\n                                    }\n                                ]\n                            }\n                        ],\n                        "transitions": [\n                            {\n                                "accept": false,\n                                "addr": "0x8d1109594e019d9c4defe9b6a855f92691a9e4fa",\n                                "depth": 0,\n                                "msg": {\n                                    "_amount": "123073860347289351",\n                                    "_recipient": "0x54f57a2017f85c7f2162f833480283f040a80647",\n                                    "_tag": "AddFunds",\n                                    "params": [\n                                        {\n                                            "vname": "initiator",\n                                            "type": "ByStr20",\n                                            "value": "0xd707d8a6f049eb7d3e1e768d22578a71b3f39553"\n                                        }\n                                    ]\n                                }\n                            }\n                        ]\n                    },\n                    "senderPubKey": "0x02BCD59F13A3DF40DE7D6B901B10DA416D2EFDD41E9A3631D6673809D7F5B9C4EF",\n                    "signature": "0xB0B321303D8CABDC3E1AD6B3ECD5CECD90A7D0A839C69C1C23A68CC0AFD283DCC9696EB503EBAE167C3DF3943A54E6EAA1D35D28D9F414FBA44109DAAAEF4F56",\n                    "version": "21823489"\n                }\n            }\n        ]\n    }\n}\n\n')))}l.isMDXComponent=!0},294:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),l=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(t),u=a,f=p["".concat(o,".").concat(u)]||p[u]||b[u]||s;return t?r.a.createElement(f,i(i({ref:n},d),{},{components:t})):r.a.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);