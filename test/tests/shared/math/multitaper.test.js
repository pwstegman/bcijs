describe('multitaper', function(){
    it('Computes the power spectral density of a signal', function(){
        // Signal (32 samples long)
        let x = [0.27,0.54,0.43,0.46,0.06,0.37,0.97,0.22,0.08,0.83,0.79,0.98,0.73,0.49,0.04,0.4,0.26,0.46,0.07,0.38,0.11,0.78,0.26,0.17,0.32,0.97,0.03,0.08,0.37,0.07,0.61,0.27];
        let sample_rate = 64;

        // Compute multitaper (default params)
        let psd = bci.multitaper(x, sample_rate);
        let expected_pxx = [0.0127282452106786,0.024727368535190867,0.025121173974541972,0.025384032844579171,0.0056547434502981116,0.0034205696043726344,0.0032025831988853433,0.0031721065186386477,0.003231378133615583,0.0032700656223051188,0.0032801216156986232,0.0023135118150775622,0.0027121444114110143,0.0028026827880422165,0.0027637786332570572,0.0021800493363373255,0.000891820792920708];
        let expected_freqs = [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32];

        assert(arrayAlmostEqual(psd.estimates, expected_pxx));
        assert.deepStrictEqual(psd.frequencies, expected_freqs);

        // Custom time half bandwidth
        psd = bci.multitaper(x, sample_rate, {nw: 2.5});
        expected_pxx = [0.020485359804241408,0.038110105409394891,0.030809159686379074,0.0027335514670587041,0.0021105763830891865,0.0040981884381232443,0.0033094527580004402,0.0039662940285911975,0.0041332810413194591,0.0033060411536415014,0.0034051016200936286,0.0029068549177303626,0.0027728950780877958,0.0013456054957858654,0.0023225236830690214,0.0026835018162150856,0.0013526533407485139];

        assert(arrayAlmostEqual(psd.estimates, expected_pxx));
        assert.deepStrictEqual(psd.frequencies, expected_freqs);
    });
});
