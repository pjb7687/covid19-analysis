
var updated_datetime = "09 Mar 2020, 21:53 (CET)";

var unique_countries = ["Australia", "Belgium", "Brazil", "Cambodia", "Canada", "China", "Finland", "France", "Germany", "Hong Kong", "India", "Italy", "Japan", "Luxembourg", "Mexico", "Nepal", "Netherlands", "New Zealand", "Nigeria", "Portugal", "Singapore", "South Korea", "Sweden", "Switzerland", "Taiwan", "Thailand", "USA", "United Kingdom", "Vietnam"];

var node_countries = {"Node_0": ["China"], "Node_1": ["South Korea"], "Node_2": ["Australia", "Belgium", "Brazil", "Cambodia", "Canada", "China", "Finland", "France", "Germany", "Hong Kong", "India", "Italy", "Japan", "Luxembourg", "Nepal", "Netherlands", "Nigeria", "Portugal", "Singapore", "South Korea", "Switzerland", "Taiwan", "Thailand", "USA", "United Kingdom", "Vietnam"], "Node_5": ["Australia", "Canada", "China", "New Zealand"], "Node_10": ["South Korea"], "Node_16": ["USA"], "Node_42": ["China", "South Korea"], "Node_43": ["South Korea"], "Node_3": ["China"], "Node_4": ["China"], "Node_6": ["China"], "Node_8": ["China"], "Node_9": ["China"], "Node_11": ["Australia"], "Node_12": ["Netherlands"], "Node_13": ["Netherlands", "Taiwan"], "Node_14": ["Australia"], "Node_15": ["China"], "Node_18": ["China"], "Node_19": ["USA"], "Node_20": ["Netherlands"], "Node_21": ["South Korea"], "Node_22": ["India"], "Node_23": ["USA"], "Node_24": ["China"], "Node_25": ["China"], "Node_26": ["China"], "Node_27": ["Hong Kong"], "Node_28": ["China"], "Node_29": ["Singapore"], "Node_30": ["Sweden"], "Node_31": ["Mexico"], "Node_32": ["United Kingdom"], "Node_33": ["China"], "Node_34": ["South Korea"], "Node_35": ["Germany", "Switzerland"], "Node_37": ["China"], "Node_38": ["Singapore"], "Node_39": ["USA"], "Node_40": ["China"], "Node_41": ["China"], "Node_44": ["China"], "Node_45": ["China"], "Node_47": ["Switzerland"], "Node_48": ["China"], "Node_49": ["China"], "Node_50": ["China"], "Node_51": ["Japan"], "Node_52": ["China"], "Node_7": ["Australia"], "Node_17": ["USA"], "Node_46": ["USA"], "Node_36": ["China"]};

var nodes = new vis.DataSet([{"id": "Node_0"}, {"id": "Node_1"}, {"id": "Node_2"}, {"id": "Node_5"}, {"id": "Node_10"}, {"id": "Node_16"}, {"id": "Node_42"}, {"id": "Node_43"}, {"id": "Node_3"}, {"id": "Node_4"}, {"id": "Node_6"}, {"id": "Node_8"}, {"id": "Node_9"}, {"id": "Node_11"}, {"id": "Node_12"}, {"id": "Node_13"}, {"id": "Node_14"}, {"id": "Node_15"}, {"id": "Node_18"}, {"id": "Node_19"}, {"id": "Node_20"}, {"id": "Node_21"}, {"id": "Node_22"}, {"id": "Node_23"}, {"id": "Node_24"}, {"id": "Node_25"}, {"id": "Node_26"}, {"id": "Node_27"}, {"id": "Node_28"}, {"id": "Node_29"}, {"id": "Node_30"}, {"id": "Node_31"}, {"id": "Node_32"}, {"id": "Node_33"}, {"id": "Node_34"}, {"id": "Node_35"}, {"id": "Node_37"}, {"id": "Node_38"}, {"id": "Node_39"}, {"id": "Node_40"}, {"id": "Node_41"}, {"id": "Node_44"}, {"id": "Node_45"}, {"id": "Node_47"}, {"id": "Node_48"}, {"id": "Node_49"}, {"id": "Node_50"}, {"id": "Node_51"}, {"id": "Node_52"}, {"id": "Node_7"}, {"id": "Node_17"}, {"id": "Node_46"}, {"id": "Node_36"}]);

var edges = new vis.DataSet([{"from": "Node_0", "to": "Node_1"}, {"from": "Node_1", "to": "Node_2"}, {"from": "Node_1", "to": "Node_36"}, {"from": "Node_2", "to": "Node_5"}, {"from": "Node_2", "to": "Node_10"}, {"from": "Node_2", "to": "Node_16"}, {"from": "Node_2", "to": "Node_42"}, {"from": "Node_2", "to": "Node_3"}, {"from": "Node_2", "to": "Node_4"}, {"from": "Node_2", "to": "Node_6"}, {"from": "Node_2", "to": "Node_8"}, {"from": "Node_2", "to": "Node_9"}, {"from": "Node_2", "to": "Node_11"}, {"from": "Node_2", "to": "Node_12"}, {"from": "Node_2", "to": "Node_13"}, {"from": "Node_2", "to": "Node_14"}, {"from": "Node_2", "to": "Node_15"}, {"from": "Node_2", "to": "Node_18"}, {"from": "Node_2", "to": "Node_19"}, {"from": "Node_2", "to": "Node_20"}, {"from": "Node_2", "to": "Node_21"}, {"from": "Node_2", "to": "Node_22"}, {"from": "Node_2", "to": "Node_23"}, {"from": "Node_2", "to": "Node_24"}, {"from": "Node_2", "to": "Node_25"}, {"from": "Node_2", "to": "Node_26"}, {"from": "Node_2", "to": "Node_27"}, {"from": "Node_2", "to": "Node_28"}, {"from": "Node_2", "to": "Node_29"}, {"from": "Node_2", "to": "Node_30"}, {"from": "Node_2", "to": "Node_31"}, {"from": "Node_2", "to": "Node_32"}, {"from": "Node_2", "to": "Node_33"}, {"from": "Node_2", "to": "Node_34"}, {"from": "Node_2", "to": "Node_35"}, {"from": "Node_2", "to": "Node_37"}, {"from": "Node_2", "to": "Node_38"}, {"from": "Node_2", "to": "Node_39"}, {"from": "Node_2", "to": "Node_40"}, {"from": "Node_2", "to": "Node_41"}, {"from": "Node_2", "to": "Node_44"}, {"from": "Node_2", "to": "Node_45"}, {"from": "Node_2", "to": "Node_47"}, {"from": "Node_2", "to": "Node_48"}, {"from": "Node_2", "to": "Node_49"}, {"from": "Node_2", "to": "Node_50"}, {"from": "Node_2", "to": "Node_51"}, {"from": "Node_2", "to": "Node_52"}, {"from": "Node_5", "to": "Node_7"}, {"from": "Node_10", "to": "Node_43"}, {"from": "Node_16", "to": "Node_17"}, {"from": "Node_16", "to": "Node_46"}]);

var node_details = {"Node_0": [["hCoV-19/Anhui/SZ005/2020", "EPI_ISL_413485", "2020-01-24"]], "Node_1": [["hCoV-19/Korea/KCDC24/2020", "EPI_ISL_412873", "2020-02-06"]], "Node_2": [["hCoV-19/Australia/NSW01/2020", "EPI_ISL_407893", "2020-01-24"], ["hCoV-19/Australia/QLD01/2020", "EPI_ISL_407894", "2020-01-28"], ["hCoV-19/Australia/QLD03/2020", "EPI_ISL_410717", "2020-02-05"], ["hCoV-19/Australia/QLD04/2020", "EPI_ISL_410718", "2020-02-05"], ["hCoV-19/Australia/VIC01/2020", "EPI_ISL_406844", "2020-01-25"], ["hCoV-19/Belgium/GHB-03021/2020", "EPI_ISL_407976", "2020-02-03"], ["hCoV-19/Brazil/SPBR-01/2020", "EPI_ISL_412964", "2020-02-25"], ["hCoV-19/Brazil/SPBR-02/2020", "EPI_ISL_413016", "2020-02-28"], ["hCoV-19/Cambodia/0012/2020", "EPI_ISL_411902", "2020-01-27"], ["hCoV-19/Canada/ON-PHL2445/2020", "EPI_ISL_413014", "2020-01-25"], ["hCoV-19/Canada/ON-VIDO-01/2020", "EPI_ISL_413015", "2020-01-23"], ["hCoV-19/China/2020XN4239-P0034/2020", "EPI_ISL_413888", "2020-01-30"], ["hCoV-19/China/2020XN4243-P0035/2020", "EPI_ISL_413853", "2020-01-30"], ["hCoV-19/China/2020XN4273-P0036/2020", "EPI_ISL_413860", "2020-01-30"], ["hCoV-19/China/2020XN4276-P0037/2020", "EPI_ISL_413859", "2020-01-31"], ["hCoV-19/China/2020XN4291-P0038/2020", "EPI_ISL_413889", "2020-01-30"], ["hCoV-19/China/2020XN4373-P0039/2020", "EPI_ISL_413851", "2020-01-30"], ["hCoV-19/China/2020XN4433-P0040/2020", "EPI_ISL_413852", "2020-01-30"], ["hCoV-19/China/2020XN4448-P0002/2020", "EPI_ISL_413857", "2020-01-31"], ["hCoV-19/China/2020XN4459-P0041/2020", "EPI_ISL_413858", "2020-01-30"], ["hCoV-19/China/2020XN4475-P0042/2020", "EPI_ISL_413854", "2020-01-30"], ["hCoV-19/China/DG-S9-P0045/2020", "EPI_ISL_413868", "2020-02-28"], ["hCoV-19/China/FS-S29-P0051/2020", "EPI_ISL_413891", "2020-02-28"], ["hCoV-19/China/FS-S30-P0052/2020", "EPI_ISL_413892", "2020-02-28"], ["hCoV-19/China/FS-S34-P0015/2020", "EPI_ISL_413890", "2020-02-28"], ["hCoV-19/China/FS-S42-P0046/2020", "EPI_ISL_413869", "2020-02-28"], ["hCoV-19/China/GD2020012-P0022/2020", "EPI_ISL_413886", "2020-02-01"], ["hCoV-19/China/GD2020016-P0011/2020", "EPI_ISL_413885", "2020-02-01"], ["hCoV-19/China/GD2020080-P0010/2020", "EPI_ISL_413861", "2020-02-01"], ["hCoV-19/China/GD2020087-P0008/2020", "EPI_ISL_413863", "2020-02-01"], ["hCoV-19/China/GD2020115-P0009/2020", "EPI_ISL_413884", "2020-02-01"], ["hCoV-19/China/GD2020134-P0031/2020", "EPI_ISL_413883", "2020-02-02"], ["hCoV-19/China/GD2020139-P0007/2020", "EPI_ISL_413882", "2020-02-02"], ["hCoV-19/China/GD2020227-P0029/2020", "EPI_ISL_413880", "2020-02-05"], ["hCoV-19/China/GD2020233-P0027/2020", "EPI_ISL_413856", "2020-02-07"], ["hCoV-19/China/GD2020241-P0013/2020", "EPI_ISL_413877", "2020-02-09"], ["hCoV-19/China/GD2020246-P0028/2020", "EPI_ISL_413864", "2020-02-09"], ["hCoV-19/China/GD2020258-P0018/2020", "EPI_ISL_413878", "2020-02-09"], ["hCoV-19/China/GDFS2020052-P0025/2020", "EPI_ISL_413875", "2020-02-10"], ["hCoV-19/China/GDFS2020054-P0005/2020", "EPI_ISL_413850", "2020-02-10"], ["hCoV-19/China/GDFS2020056-P0044/2020", "EPI_ISL_413876", "2020-02-10"], ["hCoV-19/China/GDFS2020127-P0026/2020", "EPI_ISL_413874", "2020-02-12"], ["hCoV-19/China/GDSZ202004-P0004/2020", "EPI_ISL_413879", "2020-02-05"], ["hCoV-19/China/GDSZ202008-P0020/2020", "EPI_ISL_413866", "2020-02-05"], ["hCoV-19/China/GDSZ202009-P0032/2020", "EPI_ISL_413881", "2020-02-05"], ["hCoV-19/China/GDSZ202013-P0014/2020", "EPI_ISL_413865", "2020-02-05"], ["hCoV-19/China/GDSZ202015-P0019/2020", "EPI_ISL_413867", "2020-02-05"], ["hCoV-19/China/GZ-S6-P0050/2020", "EPI_ISL_413873", "2020-02-28"], ["hCoV-19/China/IQTC01/2020", "EPI_ISL_412966", "2020-02-05"], ["hCoV-19/China/IQTC02/2020", "EPI_ISL_412967", "2020-01-29"], ["hCoV-19/China/WF0001/2020", "EPI_ISL_413691", "2020-01"], ["hCoV-19/China/WF0002/2020", "EPI_ISL_413692", "2020-01"], ["hCoV-19/China/WF0003/2020", "EPI_ISL_413693", "2020-01"], ["hCoV-19/China/WF0004/2020", "EPI_ISL_413694", "2020-01"], ["hCoV-19/China/WF0012/2020", "EPI_ISL_413697", "2020-02"], ["hCoV-19/China/WF0014/2020", "EPI_ISL_413711", "2020-02"], ["hCoV-19/China/WF0015/2020", "EPI_ISL_413729", "2020-02"], ["hCoV-19/China/WF0018/2020", "EPI_ISL_413748", "2020-02"], ["hCoV-19/China/WF0020/2020", "EPI_ISL_413750", "2020-02"], ["hCoV-19/China/WF0021/2020", "EPI_ISL_413751", "2020-02"], ["hCoV-19/China/WF0023/2020", "EPI_ISL_413752", "2020-02"], ["hCoV-19/China/WF0026/2020", "EPI_ISL_413761", "2020-02"], ["hCoV-19/China/WF0028/2020", "EPI_ISL_413791", "2020-02"], ["hCoV-19/China/WF0029/2020", "EPI_ISL_413809", "2020-02"], ["hCoV-19/China/WH-09/2020", "EPI_ISL_411957", "2020-01-08"], ["hCoV-19/China/WHU01/2020", "EPI_ISL_406716", "2020-01-02"], ["hCoV-19/China/WHU02/2020", "EPI_ISL_406717", "2020-01-02"], ["hCoV-19/China/ZH-N22-P0059/2020", "EPI_ISL_413899", "2020-02-28"], ["hCoV-19/China/ZH-S33-P0058/2020", "EPI_ISL_413898", "2020-02-28"], ["hCoV-19/China/ZS-S6-P0060/2020", "EPI_ISL_413900", "2020-02-28"], ["hCoV-19/Chongqing/IVDC-CQ-001/2020", "EPI_ISL_408481", "2020-01-18"], ["hCoV-19/Chongqing/YC01/2020", "EPI_ISL_408478", "2020-01-21"], ["hCoV-19/Chongqing/ZX01/2020", "EPI_ISL_408479", "2020-01-23"], ["hCoV-19/England/01/2020", "EPI_ISL_407071", "2020-01-29"], ["hCoV-19/England/02/2020", "EPI_ISL_407073", "2020-01-29"], ["hCoV-19/England/09c/2020", "EPI_ISL_412116", "2020-02-09"], ["hCoV-19/Finland/1/2020", "EPI_ISL_407079", "2020-01-29"], ["hCoV-19/Finland/FIN-25/2020", "EPI_ISL_412971", "2020-02-25"], ["hCoV-19/Finland/FIN01032020/2020", "EPI_ISL_413605", "2020-03-01"], ["hCoV-19/Finland/FIN03032020A/2020", "EPI_ISL_413602", "2020-03-03"], ["hCoV-19/Finland/FIN03032020B/2020", "EPI_ISL_413603", "2020-03-03"], ["hCoV-19/Finland/FIN03032020C/2020", "EPI_ISL_413604", "2020-03-03"], ["hCoV-19/Foshan/20SF207/2020", "EPI_ISL_406534", "2020-01-22"], ["hCoV-19/Foshan/20SF210/2020", "EPI_ISL_406535", "2020-01-22"], ["hCoV-19/Foshan/20SF211/2020", "EPI_ISL_406536", "2020-01-22"], ["hCoV-19/France/IDF0372-isl/2020", "EPI_ISL_410720", "2020-01-23"], ["hCoV-19/France/IDF0372/2020", "EPI_ISL_406596", "2020-01-23"], ["hCoV-19/France/IDF0373/2020", "EPI_ISL_406597", "2020-01-23"], ["hCoV-19/France/IDF0386-islP1/2020", "EPI_ISL_411219", "2020-01-28"], ["hCoV-19/France/IDF0386-islP3/2020", "EPI_ISL_411220", "2020-01-28"], ["hCoV-19/France/IDF0515-isl/2020", "EPI_ISL_410984", "2020-01-29"], ["hCoV-19/France/IDF0515/2020", "EPI_ISL_408430", "2020-01-29"], ["hCoV-19/France/IDF0571/2020", "EPI_ISL_411218", "2020-02-02"], ["hCoV-19/France/IDF0626/2020", "EPI_ISL_408431", "2020-01-29"], ["hCoV-19/France/RA739/2020", "EPI_ISL_410486", "2020-02-08"], ["hCoV-19/Fujian/13/2020", "EPI_ISL_411066", "2020-01-22"], ["hCoV-19/Fujian/8/2020", "EPI_ISL_411060", "2020-01-21"], ["hCoV-19/Germany/BavPat1/2020", "EPI_ISL_406862", "2020-01-28"], ["hCoV-19/Germany/NRW-01/2020", "EPI_ISL_413488", "2020-02-28"], ["hCoV-19/Guangdong/20SF012/2020", "EPI_ISL_403932", "2020-01-14"], ["hCoV-19/Guangdong/20SF013/2020", "EPI_ISL_403933", "2020-01-15"], ["hCoV-19/Guangdong/20SF014/2020", "EPI_ISL_403934", "2020-01-15"], ["hCoV-19/Guangdong/20SF025/2020", "EPI_ISL_403935", "2020-01-15"], ["hCoV-19/Guangdong/20SF028/2020", "EPI_ISL_403936", "2020-01-17"], ["hCoV-19/Guangdong/20SF040/2020", "EPI_ISL_403937", "2020-01-18"], ["hCoV-19/Guangdong/20SF174/2020", "EPI_ISL_406531", "2020-01-22"], ["hCoV-19/Guangdong/20SF201/2020", "EPI_ISL_406538", "2020-01-23"], ["hCoV-19/Guangzhou/20SF206/2020", "EPI_ISL_406533", "2020-01-22"], ["hCoV-19/Hangzhou/HZ-1/2020", "EPI_ISL_406970", "2020-01-20"], ["hCoV-19/Hangzhou/HZCDC0001/2020", "EPI_ISL_407313", "2020-01-19"], ["hCoV-19/Hefei/2/2020", "EPI_ISL_412026", "2020-02-23"], ["hCoV-19/Hong_Kong/VB20026565/2020", "EPI_ISL_412030", "2020-02-01"], ["hCoV-19/Hong_Kong/VM20001061/2020", "EPI_ISL_412028", "2020-01-22"], ["hCoV-19/India/1-27/2020", "EPI_ISL_413522", "2020-01-27"], ["hCoV-19/Italy/CDG1/2020", "EPI_ISL_412973", "2020-02-20"], ["hCoV-19/Italy/INMI1-cs/2020", "EPI_ISL_410546", "2020-01-31"], ["hCoV-19/Italy/INMI1-isl/2020", "EPI_ISL_410545", "2020-01-29"], ["hCoV-19/Italy/SPL1/2020", "EPI_ISL_412974", "2020-01-29"], ["hCoV-19/Italy/UniSR1/2020", "EPI_ISL_413489", "2020-03-03"], ["hCoV-19/Japan/Hu_DP_Kng_19-020/2020", "EPI_ISL_412968", "2020-02-10"], ["hCoV-19/Japan/Hu_DP_Kng_19-027/2020", "EPI_ISL_412969", "2020-02-10"], ["hCoV-19/Japan/KY-V-029/2020", "EPI_ISL_408669", "2020-01-29"], ["hCoV-19/Japan/NA-20-05-1/2020", "EPI_ISL_410531", "2020-01-25"], ["hCoV-19/Japan/OS-20-07-1/2020", "EPI_ISL_410532", "2020-01-23"], ["hCoV-19/Japan/TK/20-31-3/2020", "EPI_ISL_413459", "2020-02-20"], ["hCoV-19/Japan/TY-WK-012/2020", "EPI_ISL_408665", "2020-01-29"], ["hCoV-19/Japan/TY-WK-501/2020", "EPI_ISL_408666", "2020-01-31"], ["hCoV-19/Japan/TY-WK-521/2020", "EPI_ISL_408667", "2020-01-31"], ["hCoV-19/Jiangsu/IVDC-JS-001/2020", "EPI_ISL_408488", "2020-01-19"], ["hCoV-19/Jiangsu/JS01/2020", "EPI_ISL_411950", "2020-01-23"], ["hCoV-19/Jiangsu/JS02/2020", "EPI_ISL_411952", "2020-01-24"], ["hCoV-19/Jiangsu/JS03/2020", "EPI_ISL_411953", "2020-01-24"], ["hCoV-19/Jiangxi/IVDC-JX-002/2020", "EPI_ISL_408486", "2020-01-11"], ["hCoV-19/Jingzhou/HBCDC-HB-01/2020", "EPI_ISL_412459", "2020-01-08"], ["hCoV-19/Korea/KCDC12/2020", "EPI_ISL_412872", "2020-02-01"], ["hCoV-19/Luxembourg/Lux1/2020", "EPI_ISL_413593", "2020-02-29"], ["hCoV-19/Nepal/61/2020", "EPI_ISL_410301", "2020-01-13"], ["hCoV-19/Netherlands/Andel_1365066/2020", "EPI_ISL_413564", "2020-03-01"], ["hCoV-19/Netherlands/Berlicum_1363564/2020", "EPI_ISL_413565", "2020-02-24"], ["hCoV-19/Netherlands/Blaricum_1364780/2020", "EPI_ISL_413566", "2020-03-02"], ["hCoV-19/Netherlands/Delft_1363424/2020", "EPI_ISL_413569", "2020-02-28"], ["hCoV-19/Netherlands/Diemen_1363454/2020", "EPI_ISL_413570", "2020-02-28"], ["hCoV-19/Netherlands/Eindhoven_1363782/2020", "EPI_ISL_413571", "2020-03-02"], ["hCoV-19/Netherlands/Hardinxveld_Giessendam_1364806/2020", "EPI_ISL_413573", "2020-03-02"], ["hCoV-19/Netherlands/Helmond_1363548/2020", "EPI_ISL_413574", "2020-02-29"], ["hCoV-19/Netherlands/Naarden_1364774/2020", "EPI_ISL_413577", "2020-03-02"], ["hCoV-19/Netherlands/Nieuwendijk_1363582/2020", "EPI_ISL_413578", "2020-03-01"], ["hCoV-19/Netherlands/Nootdorp_1364222/2020", "EPI_ISL_413579", "2020-03-03"], ["hCoV-19/Netherlands/Oisterwijk_1364072/2020", "EPI_ISL_413580", "2020-03-02"], ["hCoV-19/Netherlands/Oss_1363500/2020", "EPI_ISL_413581", "2020-02-29"], ["hCoV-19/Netherlands/Rotterdam_1363790/2020", "EPI_ISL_413582", "2020-03-01"], ["hCoV-19/Netherlands/Rotterdam_1364040/2020", "EPI_ISL_413583", "2020-03-02"], ["hCoV-19/Netherlands/Rotterdam_1364740/2020", "EPI_ISL_413584", "2020-03-03"], ["hCoV-19/Netherlands/Tilburg_1364286/2020", "EPI_ISL_413587", "2020-03-03"], ["hCoV-19/Netherlands/Utrecht_1364066/2020", "EPI_ISL_413590", "2020-03-02"], ["hCoV-19/Netherlands/Zeewolde_1365080/2020", "EPI_ISL_413591", "2020-03-02"], ["hCoV-19/NetherlandsL/Houten_1363498/2020", "EPI_ISL_413575", "2020-02-29"], ["hCoV-19/Nigeria/Lagos01/2020", "EPI_ISL_413550", "2020-02-27"], ["hCoV-19/Nonthaburi/61/2020", "EPI_ISL_403962", "2020-01-08"], ["hCoV-19/Nonthaburi/74/2020", "EPI_ISL_403963", "2020-01-13"], ["hCoV-19/Portugal/CV62/2020", "EPI_ISL_413647", "2020-03-01"], ["hCoV-19/Portugal/CV63/2020", "EPI_ISL_413648", "2020-03-01"], ["hCoV-19/Shenzhen/HKU-SZ-002/2020", "EPI_ISL_406030", "2020-01-10"], ["hCoV-19/Shenzhen/SZTH-002/2020", "EPI_ISL_406593", "2020-01-13"], ["hCoV-19/Shenzhen/SZTH-003/2020", "EPI_ISL_406594", "2020-01-16"], ["hCoV-19/Sichuan/IVDC-SC-001/2020", "EPI_ISL_408484", "2020-01-15"], ["hCoV-19/Singapore/1/2020", "EPI_ISL_406973", "2020-01-23"], ["hCoV-19/Singapore/2/2020", "EPI_ISL_407987", "2020-01-25"], ["hCoV-19/Singapore/3/2020", "EPI_ISL_407988", "2020-02-01"], ["hCoV-19/Singapore/4/2020", "EPI_ISL_410535", "2020-02-03"], ["hCoV-19/Singapore/6/2020", "EPI_ISL_410537", "2020-02-09"], ["hCoV-19/Singapore/7/2020", "EPI_ISL_410713", "2020-01-27"], ["hCoV-19/Singapore/8/2020", "EPI_ISL_410714", "2020-02-03"], ["hCoV-19/Switzerland/1000477102/2020", "EPI_ISL_413019", "2020-02-26"], ["hCoV-19/Switzerland/1000477796/2020", "EPI_ISL_413022", "2020-02-29"], ["hCoV-19/Switzerland/1000477797/2020", "EPI_ISL_413023", "2020-02-29"], ["hCoV-19/Switzerland/1000477806/2020", "EPI_ISL_413024", "2020-02-29"], ["hCoV-19/Sydney/2/2020", "EPI_ISL_408976", "2020-01-22"], ["hCoV-19/Sydney/3/2020", "EPI_ISL_408977", "2020-01-25"], ["hCoV-19/Taiwan/2/2020", "EPI_ISL_406031", "2020-01-23"], ["hCoV-19/Taiwan/3/2020", "EPI_ISL_411926", "2020-01-24"], ["hCoV-19/Taiwan/4/2020", "EPI_ISL_411927", "2020-01-28"], ["hCoV-19/Taiwan/CGMH-CGU-01/2020", "EPI_ISL_411915", "2020-01-25"], ["hCoV-19/Taiwan/NTU01/2020", "EPI_ISL_408489", "2020-01-31"], ["hCoV-19/Taiwan/NTU02/2020", "EPI_ISL_410218", "2020-02-05"], ["hCoV-19/Tianmen/HBCDC-HB-07/2020", "EPI_ISL_412983", "2020-02-08"], ["hCoV-19/USA/AZ1/2020", "EPI_ISL_406223", "2020-01-22"], ["hCoV-19/USA/CA-CDPH-UC3/2020", "EPI_ISL_413559", "2020-02-27"], ["hCoV-19/USA/CA-CDPH-UC4/2020", "EPI_ISL_413561", "2020-02-27"], ["hCoV-19/USA/CA1/2020", "EPI_ISL_406034", "2020-01-23"], ["hCoV-19/USA/CA2/2020", "EPI_ISL_406036", "2020-01-22"], ["hCoV-19/USA/CA3/2020", "EPI_ISL_408008", "2020-01-29"], ["hCoV-19/USA/CA4/2020", "EPI_ISL_408009", "2020-01-29"], ["hCoV-19/USA/CA5/2020", "EPI_ISL_408010", "2020-01-29"], ["hCoV-19/USA/CA6/2020", "EPI_ISL_410044", "2020-01-27"], ["hCoV-19/USA/CA7/2020", "EPI_ISL_411954", "2020-02-06"], ["hCoV-19/USA/CA8/2020", "EPI_ISL_411955", "2020-02-10"], ["hCoV-19/USA/CA9/2020", "EPI_ISL_412862", "2020-02-23"], ["hCoV-19/USA/CruiseA-1/2020", "EPI_ISL_413606", "2020-02-17"], ["hCoV-19/USA/CruiseA-10/2020", "EPI_ISL_413615", "2020-02-17"], ["hCoV-19/USA/CruiseA-11/2020", "EPI_ISL_413616", "2020-02-17"], ["hCoV-19/USA/CruiseA-12/2020", "EPI_ISL_413617", "2020-02-20"], ["hCoV-19/USA/CruiseA-13/2020", "EPI_ISL_413618", "2020-02-20"], ["hCoV-19/USA/CruiseA-14/2020", "EPI_ISL_413619", "2020-02-25"], ["hCoV-19/USA/CruiseA-15/2020", "EPI_ISL_413620", "2020-02-18"], ["hCoV-19/USA/CruiseA-16/2020", "EPI_ISL_413621", "2020-02-18"], ["hCoV-19/USA/CruiseA-18/2020", "EPI_ISL_413623", "2020-02-24"], ["hCoV-19/USA/CruiseA-2/2020", "EPI_ISL_413607", "2020-02-18"], ["hCoV-19/USA/CruiseA-3/2020", "EPI_ISL_413608", "2020-02-18"], ["hCoV-19/USA/CruiseA-4/2020", "EPI_ISL_413609", "2020-02-21"], ["hCoV-19/USA/CruiseA-5/2020", "EPI_ISL_413610", "2020-02-21"], ["hCoV-19/USA/CruiseA-6/2020", "EPI_ISL_413611", "2020-02-21"], ["hCoV-19/USA/CruiseA-7/2020", "EPI_ISL_413612", "2020-02-17"], ["hCoV-19/USA/CruiseA-8/2020", "EPI_ISL_413613", "2020-02-17"], ["hCoV-19/USA/CruiseA-9/2020", "EPI_ISL_413614", "2020-02-17"], ["hCoV-19/USA/IL1/2020", "EPI_ISL_404253", "2020-01-21"], ["hCoV-19/USA/IL2/2020", "EPI_ISL_410045", "2020-01-28"], ["hCoV-19/USA/TX1/2020", "EPI_ISL_411956", "2020-02-11"], ["hCoV-19/USA/WA1-A12/2020", "EPI_ISL_407214", "2020-01-25"], ["hCoV-19/USA/WA1-F6/2020", "EPI_ISL_407215", "2020-01-25"], ["hCoV-19/USA/WA1/2020", "EPI_ISL_404895", "2020-01-19"], ["hCoV-19/USA/WA3-UW1/2020", "EPI_ISL_413025", "2020-02-27"], ["hCoV-19/USA/WI1/2020", "EPI_ISL_408670", "2020-01-31"], ["hCoV-19/Vietnam/VR03-38142/2020", "EPI_ISL_408668", "2020-01-24"], ["hCoV-19/Wales/PHW1/2020", "EPI_ISL_413555", "2020-02-27"], ["hCoV-19/Wales/PHW2/2020", "EPI_ISL_413556", "2020-03-04"], ["hCoV-19/Wuhan-Hu-1/2019", "EPI_ISL_402125", "2019-12-31"], ["hCoV-19/Wuhan/HBCDC-HB-01/2019", "EPI_ISL_402132", "2019-12-30"], ["hCoV-19/Wuhan/HBCDC-HB-02/2019", "EPI_ISL_412898", "2019-12-30"], ["hCoV-19/Wuhan/HBCDC-HB-03/2019", "EPI_ISL_412899", "2019-12-30"], ["hCoV-19/Wuhan/HBCDC-HB-03/2020", "EPI_ISL_412979", "2020-01-18"], ["hCoV-19/Wuhan/HBCDC-HB-04/2020", "EPI_ISL_412980", "2020-01-18"], ["hCoV-19/Wuhan/IPBCAMS-WH-01/2019", "EPI_ISL_402123", "2019-12-24"], ["hCoV-19/Wuhan/IPBCAMS-WH-02/2019", "EPI_ISL_403931", "2019-12-30"], ["hCoV-19/Wuhan/IPBCAMS-WH-03/2019", "EPI_ISL_403930", "2019-12-30"], ["hCoV-19/Wuhan/IPBCAMS-WH-04/2019", "EPI_ISL_403929", "2019-12-30"], ["hCoV-19/Wuhan/IPBCAMS-WH-05/2020", "EPI_ISL_403928", "2020-01-01"], ["hCoV-19/Wuhan/IVDC-HB-01/2019", "EPI_ISL_402119", "2019-12-30"], ["hCoV-19/Wuhan/IVDC-HB-04/2020", "EPI_ISL_402120", "2020-01-01"], ["hCoV-19/Wuhan/IVDC-HB-05/2019", "EPI_ISL_402121", "2019-12-30"], ["hCoV-19/Wuhan/WH01/2019", "EPI_ISL_406798", "2019-12-26"], ["hCoV-19/Wuhan/WH03/2020", "EPI_ISL_406800", "2020-01-01"], ["hCoV-19/Wuhan/WH04/2020", "EPI_ISL_406801", "2020-01-05"], ["hCoV-19/Wuhan/WH05/2020", "EPI_ISL_408978", "2020-02-07"], ["hCoV-19/Wuhan/WIV02/2019", "EPI_ISL_402127", "2019-12-30"], ["hCoV-19/Wuhan/WIV04/2019", "EPI_ISL_402124", "2019-12-30"], ["hCoV-19/Wuhan/WIV05/2019", "EPI_ISL_402128", "2019-12-30"], ["hCoV-19/Wuhan/WIV06/2019", "EPI_ISL_402129", "2019-12-30"], ["hCoV-19/Wuhan/WIV07/2019", "EPI_ISL_402130", "2019-12-30"], ["hCoV-19/Yunnan/IVDC-YN-003/2020", "EPI_ISL_408480", "2020-01-17"], ["hCoV-19/Zhejiang/WZ-01/2020", "EPI_ISL_404227", "2020-01-16"], ["hCoV-19/Zhejiang/WZ-02/2020", "EPI_ISL_404228", "2020-01-17"], ["hCov-19/China/WF0016/2020", "EPI_ISL_413746", "2020-02"]], "Node_5": [["hCoV-19/Australia/NSW05/2020", "EPI_ISL_412975", "2020-02-28"], ["hCoV-19/Australia/NSW06/2020", "EPI_ISL_413213", "2020-02-29"], ["hCoV-19/Australia/NSW07/2020", "EPI_ISL_413214", "2020-02-29"], ["hCoV-19/Australia/NSW11/2020", "EPI_ISL_413597", "2020-03-02"], ["hCoV-19/Australia/NSW13/2020", "EPI_ISL_413599", "2020-03-04"], ["hCoV-19/Australia/NSW14/2020", "EPI_ISL_413600", "2020-03-03"], ["hCoV-19/Canada/BC_37_0-2/2020", "EPI_ISL_412965", "2020-02-16"], ["hCoV-19/China/DG-S41-P0056/2020", "EPI_ISL_413896", "2020-02-28"], ["hCoV-19/New_Zealand/01/2020", "EPI_ISL_413490", "2020-02-27"], ["hCoV-19/Shandong/IVDC-SD-001/2020", "EPI_ISL_408482", "2020-01-19"], ["hCoV-19/Wuhan/HBCDC-HB-05/2020", "EPI_ISL_412981", "2020-01-18"]], "Node_10": [["hCoV-19/South_Korea/KUMC02/2020", "EPI_ISL_413018", "2020-02-06"]], "Node_16": [["hCoV-19/USA/CA-CDPH-UC1/2020", "EPI_ISL_413557", "2020"], ["hCoV-19/USA/WA-S2/2020", "EPI_ISL_413456", "2020-02-20"], ["hCoV-19/USA/WA-S3/2020", "EPI_ISL_413560", "2020-02-28"], ["hCoV-19/USA/WA11-UW7/2020", "EPI_ISL_413562", "2020-03-02"], ["hCoV-19/USA/WA12-UW8/2020", "EPI_ISL_413563", "2020-03-03"], ["hCoV-19/USA/WA13-UW9/2020", "EPI_ISL_413601", "2020-03-02"], ["hCoV-19/USA/WA14-UW10/2020", "EPI_ISL_413649", "2020"], ["hCoV-19/USA/WA15-UW11/2020", "EPI_ISL_413650", "2020"], ["hCoV-19/USA/WA16-UW12/2020", "EPI_ISL_413651", "2020"], ["hCoV-19/USA/WA17-UW13/2020", "EPI_ISL_413652", "2020"], ["hCoV-19/USA/WA18-UW14/2020", "EPI_ISL_413653", "2020"], ["hCoV-19/USA/WA2/2020", "EPI_ISL_412970", "2020-02-24"], ["hCoV-19/USA/WA4-UW2/2020", "EPI_ISL_413455", "2020-02-28"], ["hCoV-19/USA/WA6-UW3/2020", "EPI_ISL_413457", "2020-02-29"], ["hCoV-19/USA/WA7-UW4/2020", "EPI_ISL_413458", "2020-03-01"]], "Node_42": [["hCoV-19/Beijing/105/2020", "EPI_ISL_413518", "2020-01-26"], ["hCoV-19/Beijing/231/2020", "EPI_ISL_413519", "2020-01-28"], ["hCoV-19/Beijing/233/2020", "EPI_ISL_413520", "2020-01-28"], ["hCoV-19/Beijing/235/2020", "EPI_ISL_413521", "2020-01-28"], ["hCoV-19/Korea/KCDC06/2020", "EPI_ISL_412870", "2020-01-30"], ["hCoV-19/Korea/KCDC07/2020", "EPI_ISL_412871", "2020-01-31"], ["hCoV-19/South_Korea/KCDC03/2020", "EPI_ISL_407193", "2020-01-25"], ["hCoV-19/South_Korea/KUMC03/2020", "EPI_ISL_413513", "2020-02-27"], ["hCoV-19/South_Korea/KUMC04/2020", "EPI_ISL_413514", "2020-02-27"], ["hCoV-19/South_Korea/KUMC05/2020", "EPI_ISL_413515", "2020-02-27"], ["hCoV-19/South_Korea/KUMC06/2020", "EPI_ISL_413516", "2020-02-27"]], "Node_43": [["hCoV-19/South_Korea/KUMC01/2020", "EPI_ISL_413017", "2020-02-06"]], "Node_3": [["hCoV-19/China/MM-S1-P0048/2020", "EPI_ISL_413871", "2020-02-28"]], "Node_4": [["hCoV-19/Shenzhen/SZTH-004/2020", "EPI_ISL_406595", "2020-01-16"]], "Node_6": [["hCoV-19/China/DG-S6-P0055/2020", "EPI_ISL_413895", "2020-02-28"]], "Node_8": [["hCoV-19/China/JM-S1-P0062/2020", "EPI_ISL_413902", "2020-02-28"]], "Node_9": [["hCoV-19/Beijing/IVDC-BJ-005/2020", "EPI_ISL_408485", "2020-01-18"]], "Node_11": [["hCoV-19/Australia/QLD02/2020", "EPI_ISL_407896", "2020-01-30"]], "Node_12": [["hCoV-19/Netherlands/Utrecht_1363564/2020", "EPI_ISL_413588", "2020-03-01"], ["hCoV-19/Netherlands/Utrecht_1363628/2020", "EPI_ISL_413589", "2020-03-01"]], "Node_13": [["hCoV-19/Netherlands/Haarlem_1363688/2020", "EPI_ISL_413572", "2020-03-01"], ["hCoV-19/Taiwan/NTU03/2020", "EPI_ISL_413592", "2020-02-29"]], "Node_14": [["hCoV-19/Australia/NSW08/2020", "EPI_ISL_413594", "2020-02-28"], ["hCoV-19/Australia/NSW10/2020", "EPI_ISL_413596", "2020-02-28"]], "Node_15": [["hCoV-19/China/ZQ-S2-P0061/2020", "EPI_ISL_413901", "2020-02-28"]], "Node_18": [["hCoV-19/China/WF0019/2020", "EPI_ISL_413749", "2020-02"]], "Node_19": [["hCoV-19/USA/MA1/2020", "EPI_ISL_409067", "2020-01-29"]], "Node_20": [["hCoV-19/Netherlands/Coevorden_1363618/2020", "EPI_ISL_413567", "2020"], ["hCoV-19/Netherlands/Dalen_1363624/2020", "EPI_ISL_413568", "2020-03-01"], ["hCoV-19/Netherlands/Loon_op_zand_1363512/2020", "EPI_ISL_413576", "2020-02-29"], ["hCoV-19/Netherlands/Tilburg_/2020", "EPI_ISL_413585", "2020"], ["hCoV-19/Netherlands/Tilburg_1363354/2020", "EPI_ISL_413586", "2020-02-27"]], "Node_21": [["hCoV-19/Korea/KCDC05/2020", "EPI_ISL_412869", "2020-01-30"]], "Node_22": [["hCoV-19/India/1-31/2020", "EPI_ISL_413523", "2020-01-31"]], "Node_23": [["hCoV-19/USA/CA-CDPH-UC2/2020", "EPI_ISL_413558", "2020-02-27"]], "Node_24": [["hCoV-19/Shenzhen/HKU-SZ-005/2020", "EPI_ISL_405839", "2020-01-11"]], "Node_25": [["hCoV-19/China/FS-S50-P0053/2020", "EPI_ISL_413893", "2020-02-28"]], "Node_26": [["hCoV-19/China/SZ-N128-P0057/2020", "EPI_ISL_413897", "2020-02-28"]], "Node_27": [["hCoV-19/Hong_Kong/VM20001988/2020", "EPI_ISL_412029", "2020-01-30"]], "Node_28": [["hCoV-19/China/DG-S2-P0054/2020", "EPI_ISL_413894", "2020-02-28"], ["hCoV-19/China/GD2020086-P0021/2020", "EPI_ISL_413862", "2020-02-01"], ["hCoV-19/China/GD2020234-P0023/2020", "EPI_ISL_413855", "2020-02-07"]], "Node_29": [["hCoV-19/Singapore/11/2020", "EPI_ISL_410719", "2020-02-02"]], "Node_30": [["hCoV-19/Sweden/01/2020", "EPI_ISL_411951", "2020-02-07"]], "Node_31": [["hCoV-19/Mexico/CDMX/InDRE_01/2020", "EPI_ISL_412972", "2020-02-27"]], "Node_32": [["hCoV-19/Scotland/CVR01/2020", "EPI_ISL_413221", "2020-03-02"]], "Node_33": [["hCoV-19/Wuhan/HBCDC-HB-02/2020", "EPI_ISL_412978", "2020-01-17"]], "Node_34": [["hCoV-19/South_Korea/SNU01/2020", "EPI_ISL_411929", "2020-01"]], "Node_35": [["hCoV-19/Germany/Baden-Wuerttemberg-1/2020", "EPI_ISL_412912", "2020-02-25"], ["hCoV-19/Switzerland/1000477757/2020", "EPI_ISL_413021", "2020-02-29"]], "Node_37": [["hCoV-19/Shanghai/IVDC-SH-001/2020", "EPI_ISL_408483", "2020-01-20"]], "Node_38": [["hCoV-19/Singapore/10/2020", "EPI_ISL_410716", "2020-02-04"], ["hCoV-19/Singapore/5/2020", "EPI_ISL_410536", "2020-02-06"], ["hCoV-19/Singapore/9/2020", "EPI_ISL_410715", "2020-02-04"]], "Node_39": [["hCoV-19/USA/CruiseA-17/2020", "EPI_ISL_413622", "2020-02-24"]], "Node_40": [["hCoV-19/Wuhan/HBCDC-HB-06/2020", "EPI_ISL_412982", "2020-02-07"]], "Node_41": [["hCoV-19/China/WF0024/2020", "EPI_ISL_413753", "2020-02"]], "Node_44": [["hCoV-19/Henan/IVDC-HeN-002/2020", "EPI_ISL_408487", "2020-01-20"]], "Node_45": [["hCoV-19/China/SZ-N59-P0049/2020", "EPI_ISL_413872", "2020-02-28"]], "Node_47": [["hCoV-19/Switzerland/1000477377/2020", "EPI_ISL_413020", "2020-02-27"]], "Node_48": [["hCoV-19/Wuhan/WH02/2019", "EPI_ISL_406799", "2019-12-31"]], "Node_49": [["hCoV-19/Wuhan/HBCDC-HB-04/2019", "EPI_ISL_412900", "2019-12-30"]], "Node_50": [["hCoV-19/Shenzhen/SZTH-001/2020", "EPI_ISL_406592", "2020-01-13"]], "Node_51": [["hCoV-19/Japan/AI/I-004/2020", "EPI_ISL_407084", "2020-01-25"]], "Node_52": [["hCoV-19/China/FS-S48-P0047/2020", "EPI_ISL_413870", "2020-02-28"]], "Node_7": [["hCoV-19/Australia/NSW09/2020", "EPI_ISL_413595", "2020-02-28"], ["hCoV-19/Australia/NSW12/2020", "EPI_ISL_413598", "2020-03-04"]], "Node_17": [["hCoV-19/USA/WA9-UW6/2020", "EPI_ISL_413487", "2020-03-01"]], "Node_46": [["hCoV-19/USA/WA8-UW5/2020", "EPI_ISL_413486", "2020-03-01"]], "Node_36": [["hCoV-19/China/GD2020085-P0043/2020", "EPI_ISL_413887", "2020-02-01"]]};
