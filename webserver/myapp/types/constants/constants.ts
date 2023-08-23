class FormOption {
    static get CATEGORIES() {
        return [
            { value: '映画とアニメ', label: '映画とアニメ' },
            { value: '自動車、乗り物', label: '自動車、乗り物' },
            { value: '音楽', label: '音楽' },
            { value: 'ペットと動物', label: 'ペットと動物' },
            { value: 'スポーツ', label: 'スポーツ' },
            { value: '旅行とイベント', label: '旅行とイベント' },
            { value: 'ゲーム', label: 'ゲーム' },
            { value: 'ブログ', label: 'ブログ' },
            { value: 'コメディ', label: 'コメディ' },
            { value: 'エンターテイメント', label: 'エンターテイメント' },
            { value: 'ニュースと政治', label: 'ニュースと政治' },
            { value: 'ハウツーとスタイル', label: 'ハウツーとスタイル' },
            { value: '教育', label: '教育' },
            { value: '科学と技術', label: '科学と技術' },
            { value: '非営利団体と社会活動', label: '非営利団体と社会活動' },
        ];
    }
    static get IMAGE_LIMIT() {
        return 4000000;
    }
}

export default FormOption;
