describe('bandpower', function(){
    it('Estimates the bandpower of a signal', function(){
        let x = [0.67913554086574768,0.39551521566859305,0.36743664854447655,0.98798200316163276,0.037738866239552138,0.88516800820247532,0.913286827639239,0.796183873585212,0.0987122786555743,0.26187118387071606,0.33535683996279653,0.679727951377338,0.13655313735536967,0.72122749858174018,0.10676186160724144,0.65375734866855961,0.49417393663927012,0.77905172323127514,0.71503707840069408,0.90372056055631633,0.89092250433078923,0.33416305273749625,0.69874583233479448,0.19780982668592917,0.030540946304636662,0.74407426036746238,0.50002243559020088,0.47992214114606047,0.90472223806736274,0.60986664842255844,0.61766638958845466,0.85944230564621227,0.80548942452968564,0.5767215156146851,0.18292246941491397,0.23993201056871738,0.88651193307610132,0.028674152464106095,0.48990138851222387,0.16792714568225675,0.97868064964115875,0.71269447167891409,0.500471624154843,0.4710883745419393,0.05961886757963919,0.68197190414906317,0.042431137500741678,0.071445464600642383,0.5216498424642837,0.096730025780866979,0.81814855385962471,0.81754709207928633,0.7224395923668423,0.14986544247796685,0.65960525290830718,0.51859494251053817,0.97297455476386252,0.64899149271235612,0.80033057535240149,0.45379770872691949,0.43239150378346169,0.82531379540204564,0.083469814858914027,0.13317100760716172,0.17338861311900555,0.39093780232373554,0.83137974283906957,0.80336439160244022,0.060471179169893641,0.3992577706135757,0.52687583050829589,0.41679946793078693,0.65685989097370723,0.62797335919010422,0.29198407996171494,0.43165117024872024,0.01548712563601895,0.98406372437915379,0.16716840991465598,0.10621634492866383,0.37240974005553695,0.19811840254297464,0.48968763801602389,0.33949341339075767,0.951630464777727,0.92033203983656375,0.052676997680792592,0.73785809551699655,0.26911942639855591,0.42283561500880784,0.54787090121484472,0.94273698427693431,0.4177441043166622,0.98305246646985611,0.30145494871206546,0.7010987559009263,0.66633885158442563,0.53912646504285666,0.69810552018030836,0.66652791340258688,0.17813245440033776,0.12801439972017259,0.99908039476136068,0.17112106635643209,0.032600820530528041,0.56119979270966014,0.88186650045180992,0.66917530453439378,0.19043326717995412,0.3689165460638949,0.46072593726041156,0.98163795097074968,0.15640495222656348,0.85552280584591134,0.644764536870088,0.37627221027883162,0.19092369523630304,0.428252992979386,0.4820220610318563,0.1206116132971623,0.589507484695059,0.22618767975267573,0.38461912436941081,0.58298638274767389,0.25180612247231282,0.29044066427697934,0.61709088439322335,0.26528090981002939,0.824376266688835,0.98266339972195027,0.73024879226759765,0.34387700411498312,0.584069333278452,0.10776901524374305,0.90630815064973291,0.87965372448190482,0.81776055937064185,0.26072799905546462,0.59435625066433084,0.022512592740231763,0.42525932021413493,0.31271888682061555,0.16148474431174997,0.17876618675236822,0.42288568910008451,0.094229338887734659,0.59852366875674112,0.470924256358334,0.69594931330160792,0.69988784992829156,0.63853075827183792,0.033603836066429471,0.068806099118051245,0.31959973518049611,0.5308642806941265,0.65444570775706634,0.40761919704115257,0.81998122278194063,0.71835894320588367,0.96864933023109367,0.53133390656567447,0.32514568182056003,0.10562920332902193,0.61095865874620059,0.77880224182409252,0.42345291896273829,0.090823285787439478,0.2664714907790724,0.15365671759130661,0.2810053025338709,0.44008513900172086,0.52714274176065223,0.457424365687674,0.8753715986041849,0.51805210836110416,0.94362262454838786,0.637709098072174,0.95769393984158324,0.24070703548016026,0.67612230386375183,0.28906457167447674,0.67180816541421517,0.69514049955173718,0.067992768470010567,0.25479015659700532,0.22404003082421875,0.66783272701371654,0.84439215652720456,0.34446241130104216,0.78051965273135793,0.67533206574699955,0.0067153143184774944,0.60217048758179526,0.38677119452098463,0.9159912441314253,0.0011510571291072358,0.46244915924232866,0.4243490398153752,0.460916366028964,0.77015972860860926,0.32247180718677859,0.78473929476074156,0.4713571537106116,0.035762733269117941,0.1758744156835309,0.72175803339110245,0.47348599296532035,0.15272120043823179,0.3411246070491093,0.60738921376834742,0.19174525546179777,0.73842683997694158,0.2428495983181691,0.91742434204938239,0.26906158668601832,0.76550001662143841,0.188661976791491,0.28749817306613124,0.091113463686534946,0.576209380663007,0.683363243294653,0.54659311459032278,0.42572884187118787,0.64444278143133649,0.64761763017268437,0.679016754093202,0.63578671051408364,0.94517411310940136,0.20893492242602285,0.7092817027105448,0.23623057699379657,0.11939624779730551,0.60730394068563465,0.450137696965896,0.45872549364886783,0.66194475190565194,0.77028551480366014,0.35021801344110504,0.66200959835913453,0.41615858996979649,0.841929152691309,0.83291681907521575,0.25644099222914729,0.61346073681287527,0.58224916452722708,0.54073933712440969,0.86994103235800735,0.26477902647563,0.31807407548105915,0.11921454105419116,0.93982947034492059,0.64555187497252353,0.47946322494888782,0.63931696104010838,0.54471611052676283,0.64731148029312768];
        let sample_rate = 256;

        // Assert comparison threshold
        let threshold = 0.00000000001;

        // Check output values with the default window of Hann
        let bands = ['delta', 'theta', 'alpha', 'beta', 'gamma'];
        let powers = bands.map(band => bci.bandpower(x, sample_rate, band));
        let expected = [0.077484474017630, 0.001444858938927, 0.005240977980124, 0.011789209787558, 0.014367955346233];
        assert(arrayAlmostEqual(expected, powers, threshold));

        // Check rectangular window
        powers = bands.map(band => bci.bandpower(x, sample_rate, band, {window: 'rectangular'}));
        expected = [8.990989418700449e-04, 0.001112937041278, 0.003097470389661, 0.012687774966708, 0.012761160881297];
        assert(arrayAlmostEqual(expected, powers, threshold));

        // Check string mappings
        assert.equal(bci.bandpower(x, sample_rate, 'delta'), bci.bandpower(x, sample_rate, [1, 3]));
        assert.equal(bci.bandpower(x, sample_rate, 'theta'), bci.bandpower(x, sample_rate, [4, 7]));
        assert.equal(bci.bandpower(x, sample_rate, 'alpha'), bci.bandpower(x, sample_rate, [8, 12]));
        assert.equal(bci.bandpower(x, sample_rate, 'beta'), bci.bandpower(x, sample_rate, [13, 30]));
        assert.equal(bci.bandpower(x, sample_rate, 'gamma'), bci.bandpower(x, sample_rate, [31, 50]));

        // Passing a single band as a string should provide a numeric results
        // Passing an array of bands provides an array of results
        // Check these give the same power
        assert.equal(bci.bandpower(x, sample_rate, 'alpha'), bci.bandpower(x, sample_rate, ['alpha'])[0]);

        // Check multiple signals with single band
        let x2 = [0.6701869255296267,0.5533842023977433,0.8052585013769005,0.4170296384502892,0.2873212012540036,0.6079017784522256,0.016592959956285513,0.7925624052387379,0.9054557276279243,0.20807219688596756,0.99112751298011,0.020979380992142804,0.9573360746579287,0.9819282344883755,0.32719425743445396,0.24628395939457337,0.31552401000487507,0.20164350994404923,0.5676858360151051,0.5845062990835461,0.22363117235006524,0.5865736281052003,0.6941129111935538,0.04624654925659355,0.7240304961996977,0.6528811555756497,0.15835669215305836,0.3942888878981583,0.23639362351674342,0.6449567067604318,0.03566546027781814,0.7407083593533974,0.34875368232677784,0.9166423149610778,0.3201850513451474,0.521588831601904,0.40148278452128316,0.8374380120720615,0.4173606459475596,0.012914389350888733,0.8730859412258198,0.5065961319432046,0.5678242218819309,0.4466263515545825,0.002697454638571628,0.2770971302110332,0.8079242150036912,0.9411089983023659,0.10214235080369272,0.8442999361704702,0.16061901073448426,0.44526869094806987,0.17932778086687273,0.09098664455727223,0.34215491135161313,0.5506281611310986,0.9146385422339782,0.6906698747183739,0.8980612452378971,0.5474974927493277,0.8605727802529897,0.20625643649626157,0.9659097342645269,0.5479349269552611,0.9402659372099866,0.4554651418354523,0.6454209243349132,0.23432265705180888,0.33505651867167363,0.1732944559333005,0.15221957835573652,0.9720952447712854,0.8907157453531482,0.25232831960296287,0.46243164827476724,0.11573078266870707,0.9823713976618875,0.5570199975128882,0.7739137057131007,0.030127442997833098,0.6756322893180022,0.1715902689271671,0.8291131646181709,0.42402035888781153,0.6358176591037774,0.4188777978772529,0.035892218728336145,0.01672439568861961,0.7143730798726899,0.19400245091554602,0.5205260524716369,0.9350868889789004,0.021143249835356315,0.8492323399682464,0.19685291425130425,0.04735838207922405,0.6706569892329242,0.07606300191956761,0.07217963538085881,0.1604095883996799,0.25481110546677344,0.5120191477331946,0.38451631380152174,0.46222550755214153,0.250647107171309,0.16627885258522612,0.4832570632236317,0.7268999718103917,0.5938210904794923,0.7486803074046366,0.38200536668252716,0.16313123313012623,0.8955678554669233,0.48218294602913847,0.9452781005789597,0.4997030447141606,0.14408143374741256,0.6116093134556644,0.3223448893796008,0.10715136931957336,0.15476613420026064,0.10675694404374725,0.03810718145512193,0.7435164063974056,0.11248012416279707,0.9223789343327542,0.8113236722291075,0.013892307931295589,0.9425941031423835,0.1422614667665607,0.08391723053697286,0.2563616562116855,0.8873483799145165,0.8494855742867031,0.3027630410494766,0.5903729218205629,0.44423933844252006,0.01562772812641633,0.8231120887481111,0.3189691934108574,0.43296121702272217,0.6034872108416509,0.7524706367570995,0.13872903276270088,0.8935079610070391,0.7979570680650403,0.4755070587868526,0.5482896834743238,0.7510227214754537,0.8972999647574329,0.16703868620501705,0.6599469666913378,0.4355058582956006,0.39111168848559097,0.6370633432893156,0.791169411275459,0.951693010630283,0.9095134520865722,0.9404550696315024,0.5224754353194603,0.11139636185015855,0.9889151325574908,0.9487549156403419,0.25024012465959555,0.9362953143999233,0.8435925805448021,0.3831848326896712,0.17038567292177875,0.18767672476988428,0.3835759729408108,0.48099817759617247,0.04958141857406484,0.6249160656764756,0.3361125910888769,0.18326340946665787,0.3071128383743251,0.4463683451497904,0.7506362185566768,0.5456559927493363,0.5160519850950605,0.10389972720221996,0.5650519198491601,0.15051420624932854,0.20353704793613292,0.22992350548035234,0.37534981165969494,0.7141208556024179,0.05165754072270068,0.2992141206939638,0.18806605856865466,0.6255514456867024,0.04881639615320155,0.03200309914497912,0.565204411217143,0.24429841620893256,0.2390102832959755,0.007133604242111513,0.4769757124146268,0.7727666786461358,0.19008106710388417,0.4728586135608437,0.1730180261341161,0.9897688218170242,0.6850859514856309,0.6434639649134184,0.28715625514598964,0.2861090470234491,0.6382449436230697,0.2648084953261527,0.2495924082090959,0.9929639706932245,0.06415019265102573,0.92857456389471,0.1649777702417683,0.496974911870375,0.4237412481891183,0.07917452185791296,0.3717218819502943,0.44485440596370696,0.5775340483842386,0.5528386159532694,0.3184579982660707,0.41356881981375593,0.3460623476681022,0.0503337670426971,0.5496430214269252,0.45760201916513776,0.5600998955538357,0.45100957583590473,0.4411466778136268,0.5105219488799608,0.9241824293425023,0.9196034098526915,0.05950260571179111,0.5850263170806032,0.3578448004048067,0.4991351000949835,0.8615151610296516,0.19972927142626506,0.8564328200053337,0.07421207189623047,0.4929337165961134,0.3833079407616464,0.028877390294065552,0.7770127820231763,0.31482798656768285,0.5886524919250979,0.5317021972527878,0.09792757394742946,0.7678820293509199,0.4794487539901062,0.9739674662623399,0.505216599786593,0.38840009059278624,0.9014740013456135,0.4715808616328385];
        let multichannel = bci.transpose([x, x2]);
        powers = bci.bandpower(multichannel, sample_rate, 'alpha');
        expected = [x, x2].map(signal => bci.bandpower(signal, sample_rate, 'alpha'));
        assert.deepStrictEqual(powers, expected);

        // Check single signal with multiple bands
        powers = bci.bandpower(x, sample_rate, bands);
        expected = bands.map(band => bci.bandpower(x, sample_rate, band));
        assert.deepStrictEqual(powers, expected);

        // Check multiple signals with multiple bands
        powers = bci.bandpower(multichannel, sample_rate, ['alpha', 'beta']);
        expected = ['alpha', 'beta'].map(band => bci.bandpower(multichannel, sample_rate, band));
        assert.deepStrictEqual(powers, expected);

        // Check average powers across channels
        powers = bci.bandpower(multichannel, sample_rate, ['alpha', 'beta'], {average: true});

        expected = bci.bandpower(multichannel, sample_rate, ['alpha', 'beta']);
        expected[0] = (expected[0][0] + expected[0][1]) / 2;
        expected[1] = (expected[1][0] + expected[1][1]) / 2;

        assert.deepStrictEqual(powers, expected);

        // Check relative powers
        let total = bci.bandpower(x, sample_rate, [0, sample_rate / 2]);

        powers = bci.bandpower(x, sample_rate, 'alpha', {relative: true});
        expected = bci.bandpower(x, sample_rate, 'alpha') / total;
        assert.equal(powers, expected);

        powers = bci.bandpower(x, sample_rate, ['alpha', 'beta'], {relative: true});
        expected = [bci.bandpower(x, sample_rate, 'alpha') / total, bci.bandpower(x, sample_rate, 'beta') / total];
        assert.deepStrictEqual(powers, expected);

        // Check PSD input as array
        let psd = bci.periodogram(x, sample_rate);
        powers = bci.bandpower(psd.estimates, sample_rate, 'alpha', {input: 'psd'});
        expected = bci.bandpower(x, sample_rate, 'alpha', {window: 'rectangular'});
        assert.equal(powers, expected);

        // Check PSD input as object
        powers = bci.bandpower(psd, sample_rate, 'alpha', {input: 'psd'});
        assert.equal(powers, expected);

        // Check different FFT size
        powers = bci.bandpower(x, sample_rate, 'alpha', {fftSize: sample_rate * 2});
        psd = bci.periodogram(x, sample_rate, {fftSize: sample_rate * 2, window: 'hann'});
        expected = bci.bandpower(psd, sample_rate, 'alpha');
        assert.equal(powers, expected);
    });
});
