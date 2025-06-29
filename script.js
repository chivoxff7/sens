const deviceDatabase = {
    xiaomi: {
        // Flagship Series
        'Mi 14 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Mi 14 Pro': { refreshRate: 120, performance: 'ultra' },
        'Mi 14': { refreshRate: 120, performance: 'high' },
        'Mi 13 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Mi 13 Pro': { refreshRate: 120, performance: 'ultra' },
        'Mi 13': { refreshRate: 120, performance: 'high' },
        'Mi 12S Ultra': { refreshRate: 120, performance: 'ultra' },
        'Mi 12 Pro': { refreshRate: 120, performance: 'high' },
        'Mi 12': { refreshRate: 120, performance: 'high' },
        'Mi 11 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Mi 11 Pro': { refreshRate: 120, performance: 'high' },
        'Mi 11': { refreshRate: 120, performance: 'high' },
        'Mi 10T Pro': { refreshRate: 144, performance: 'high' },
        'Mi 10 Pro': { refreshRate: 90, performance: 'high' },
        'Mi 10': { refreshRate: 90, performance: 'high' },
        
        // POCO Series
        'POCO X6 Pro 5G': { refreshRate: 120, performance: 'high' },
        'POCO X6 5G': { refreshRate: 120, performance: 'medium' },
        'POCO X5 Pro 5G': { refreshRate: 120, performance: 'medium' },
        'POCO X5 5G': { refreshRate: 120, performance: 'medium' },
        'POCO X4 Pro 5G': { refreshRate: 120, performance: 'medium' },
        'POCO X4 GT': { refreshRate: 144, performance: 'high' },
        'POCO X3 Pro': { refreshRate: 120, performance: 'medium' },
        'POCO X3 NFC': { refreshRate: 120, performance: 'medium' },
        'POCO F6 Pro': { refreshRate: 120, performance: 'ultra' },
        'POCO F6': { refreshRate: 120, performance: 'high' },
        'POCO F5 Pro': { refreshRate: 120, performance: 'high' },
        'POCO F5': { refreshRate: 120, performance: 'high' },
        'POCO F4 GT': { refreshRate: 120, performance: 'ultra' },
        'POCO F4': { refreshRate: 120, performance: 'high' },
        'POCO F3': { refreshRate: 120, performance: 'high' },
        'POCO F2 Pro': { refreshRate: 60, performance: 'high' },
        'POCO M6 Pro': { refreshRate: 90, performance: 'medium' },
        'POCO M5s': { refreshRate: 90, performance: 'low' },
        'POCO M5': { refreshRate: 90, performance: 'low' },
        'POCO M4 Pro 5G': { refreshRate: 90, performance: 'medium' },
        'POCO C65': { refreshRate: 90, performance: 'low' },
        'POCO C55': { refreshRate: 90, performance: 'low' },
        
        // Redmi Note Series
        'Redmi Note 13 Pro+ 5G': { refreshRate: 120, performance: 'high' },
        'Redmi Note 13 Pro 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 13 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 12 Pro+ 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 12 Pro 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 12 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 11 Pro+ 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 11 Pro 5G': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 11S': { refreshRate: 90, performance: 'medium' },
        'Redmi Note 11': { refreshRate: 90, performance: 'medium' },
        'Redmi Note 10 Pro': { refreshRate: 120, performance: 'medium' },
        'Redmi Note 10S': { refreshRate: 60, performance: 'medium' },
        'Redmi Note 10': { refreshRate: 60, performance: 'medium' },
        'Redmi Note 9 Pro': { refreshRate: 60, performance: 'medium' },
        'Redmi Note 9S': { refreshRate: 60, performance: 'medium' },
        'Redmi Note 9': { refreshRate: 60, performance: 'low' },
        'Redmi Note 8 Pro': { refreshRate: 60, performance: 'medium' },
        'Redmi Note 8': { refreshRate: 60, performance: 'low' },
        
        // Redmi K Series
        'Redmi K70 Ultra': { refreshRate: 144, performance: 'ultra' },
        'Redmi K70 Pro': { refreshRate: 120, performance: 'ultra' },
        'Redmi K70': { refreshRate: 120, performance: 'high' },
        'Redmi K60 Ultra': { refreshRate: 144, performance: 'ultra' },
        'Redmi K60 Pro': { refreshRate: 120, performance: 'ultra' },
        'Redmi K60': { refreshRate: 120, performance: 'high' },
        'Redmi K50 Ultra': { refreshRate: 120, performance: 'high' },
        'Redmi K50 Pro': { refreshRate: 120, performance: 'high' },
        'Redmi K50': { refreshRate: 120, performance: 'high' },
        'Redmi K40 Pro+': { refreshRate: 120, performance: 'high' },
        'Redmi K40 Pro': { refreshRate: 120, performance: 'high' },
        'Redmi K40': { refreshRate: 120, performance: 'high' },
        'Redmi K30 Ultra': { refreshRate: 120, performance: 'medium' },
        'Redmi K30 Pro': { refreshRate: 60, performance: 'high' },
        'Redmi K30': { refreshRate: 120, performance: 'medium' },
        
        // Redmi Series
        'Redmi 13C': { refreshRate: 90, performance: 'low' },
        'Redmi 12C': { refreshRate: 60, performance: 'low' },
        'Redmi 12': { refreshRate: 90, performance: 'low' },
        'Redmi 11A': { refreshRate: 60, performance: 'low' },
        'Redmi 10A': { refreshRate: 60, performance: 'low' },
        'Redmi 10': { refreshRate: 90, performance: 'low' },
        'Redmi 9A': { refreshRate: 60, performance: 'low' },
        'Redmi 9C': { refreshRate: 60, performance: 'low' },
        'Redmi 9': { refreshRate: 60, performance: 'low' },
        'Redmi 8A': { refreshRate: 60, performance: 'low' },
        'Redmi 8': { refreshRate: 60, performance: 'low' },
        'Redmi 7A': { refreshRate: 60, performance: 'low' },
        'Redmi 7': { refreshRate: 60, performance: 'low' }
    },

    samsung: {
        // Galaxy S Series
        'Galaxy S24 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S24+': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S24': { refreshRate: 120, performance: 'high' },
        'Galaxy S23 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S23+': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S23': { refreshRate: 120, performance: 'high' },
        'Galaxy S22 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S22+': { refreshRate: 120, performance: 'high' },
        'Galaxy S22': { refreshRate: 120, performance: 'high' },
        'Galaxy S21 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S21+': { refreshRate: 120, performance: 'high' },
        'Galaxy S21': { refreshRate: 120, performance: 'high' },
        'Galaxy S20 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Galaxy S20+': { refreshRate: 120, performance: 'high' },
        'Galaxy S20': { refreshRate: 120, performance: 'high' },
        'Galaxy S10+': { refreshRate: 60, performance: 'high' },
        'Galaxy S10': { refreshRate: 60, performance: 'high' },
        'Galaxy S10e': { refreshRate: 60, performance: 'medium' },
        
        // Galaxy Note Series
        'Galaxy Note 20 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Note 20': { refreshRate: 60, performance: 'high' },
        'Galaxy Note 10+': { refreshRate: 60, performance: 'high' },
        'Galaxy Note 10': { refreshRate: 60, performance: 'high' },
        'Galaxy Note 9': { refreshRate: 60, performance: 'high' },
        'Galaxy Note 8': { refreshRate: 60, performance: 'medium' },
        
        // Galaxy A Series
        'Galaxy A75 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A55 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A54 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A53 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A52s 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A52 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A51': { refreshRate: 60, performance: 'medium' },
        'Galaxy A50': { refreshRate: 60, performance: 'medium' },
        'Galaxy A35 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A34 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A33 5G': { refreshRate: 90, performance: 'medium' },
        'Galaxy A32 5G': { refreshRate: 60, performance: 'medium' },
        'Galaxy A31': { refreshRate: 60, performance: 'medium' },
        'Galaxy A30': { refreshRate: 60, performance: 'medium' },
        'Galaxy A25 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy A24': { refreshRate: 90, performance: 'low' },
        'Galaxy A23': { refreshRate: 90, performance: 'low' },
        'Galaxy A22': { refreshRate: 90, performance: 'low' },
        'Galaxy A21s': { refreshRate: 60, performance: 'low' },
        'Galaxy A21': { refreshRate: 60, performance: 'low' },
        'Galaxy A20': { refreshRate: 60, performance: 'low' },
        'Galaxy A15 5G': { refreshRate: 90, performance: 'low' },
        'Galaxy A14 5G': { refreshRate: 90, performance: 'low' },
        'Galaxy A13': { refreshRate: 60, performance: 'low' },
        'Galaxy A12': { refreshRate: 60, performance: 'low' },
        'Galaxy A11': { refreshRate: 60, performance: 'low' },
        'Galaxy A10': { refreshRate: 60, performance: 'low' },
        
        // Galaxy M Series
        'Galaxy M55 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M54 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M53 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M52 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M51': { refreshRate: 60, performance: 'medium' },
        'Galaxy M35 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M34 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M33 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M32': { refreshRate: 90, performance: 'medium' },
        'Galaxy M31': { refreshRate: 60, performance: 'medium' },
        'Galaxy M30': { refreshRate: 60, performance: 'medium' },
        'Galaxy M25 5G': { refreshRate: 120, performance: 'medium' },
        'Galaxy M24': { refreshRate: 90, performance: 'low' },
        'Galaxy M23': { refreshRate: 120, performance: 'medium' },
        'Galaxy M22': { refreshRate: 90, performance: 'low' },
        'Galaxy M21': { refreshRate: 60, performance: 'low' },
        'Galaxy M20': { refreshRate: 60, performance: 'low' },
        'Galaxy M15 5G': { refreshRate: 90, performance: 'low' },
        'Galaxy M14 5G': { refreshRate: 90, performance: 'low' },
        'Galaxy M13': { refreshRate: 90, performance: 'low' },
        'Galaxy M12': { refreshRate: 90, performance: 'low' },
        'Galaxy M11': { refreshRate: 60, performance: 'low' },
        'Galaxy M10': { refreshRate: 60, performance: 'low' },
        
        // Galaxy Z Series (Foldables)
        'Galaxy Z Fold6': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Z Flip6': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Z Fold5': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Z Flip5': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Z Fold4': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Z Flip4': { refreshRate: 120, performance: 'high' },
        'Galaxy Z Fold3': { refreshRate: 120, performance: 'ultra' },
        'Galaxy Z Flip3': { refreshRate: 120, performance: 'high' },
        'Galaxy Z Fold2': { refreshRate: 120, performance: 'high' },
        'Galaxy Z Flip': { refreshRate: 60, performance: 'high' }
    },

    apple: {
        // iPhone 15 Series
        'iPhone 15 Pro Max': { refreshRate: 120, performance: 'ultra' },
        'iPhone 15 Pro': { refreshRate: 120, performance: 'ultra' },
        'iPhone 15 Plus': { refreshRate: 60, performance: 'high' },
        'iPhone 15': { refreshRate: 60, performance: 'high' },
        
        // iPhone 14 Series
        'iPhone 14 Pro Max': { refreshRate: 120, performance: 'ultra' },
        'iPhone 14 Pro': { refreshRate: 120, performance: 'ultra' },
        'iPhone 14 Plus': { refreshRate: 60, performance: 'high' },
        'iPhone 14': { refreshRate: 60, performance: 'high' },
        
        // iPhone 13 Series
        'iPhone 13 Pro Max': { refreshRate: 120, performance: 'ultra' },
        'iPhone 13 Pro': { refreshRate: 120, performance: 'ultra' },
        'iPhone 13': { refreshRate: 60, performance: 'high' },
        'iPhone 13 mini': { refreshRate: 60, performance: 'high' },
        
        // iPhone 12 Series
        'iPhone 12 Pro Max': { refreshRate: 60, performance: 'ultra' },
        'iPhone 12 Pro': { refreshRate: 60, performance: 'ultra' },
        'iPhone 12': { refreshRate: 60, performance: 'high' },
        'iPhone 12 mini': { refreshRate: 60, performance: 'high' },
        
        // iPhone 11 Series
        'iPhone 11 Pro Max': { refreshRate: 60, performance: 'high' },
        'iPhone 11 Pro': { refreshRate: 60, performance: 'high' },
        'iPhone 11': { refreshRate: 60, performance: 'high' },
        
        // iPhone XS/XR Series
        'iPhone XS Max': { refreshRate: 60, performance: 'high' },
        'iPhone XS': { refreshRate: 60, performance: 'high' },
        'iPhone XR': { refreshRate: 60, performance: 'high' },
        'iPhone X': { refreshRate: 60, performance: 'high' },
        
        // iPhone SE Series
        'iPhone SE (3rd generation)': { refreshRate: 60, performance: 'medium' },
        'iPhone SE (2nd generation)': { refreshRate: 60, performance: 'medium' },
        
        // Older iPhones
        'iPhone 8 Plus': { refreshRate: 60, performance: 'medium' },
        'iPhone 8': { refreshRate: 60, performance: 'medium' },
        'iPhone 7 Plus': { refreshRate: 60, performance: 'medium' },
        'iPhone 7': { refreshRate: 60, performance: 'medium' }
    },

    huawei: {
        // P Series
        'P70 Ultra': { refreshRate: 120, performance: 'ultra' },
        'P70 Pro': { refreshRate: 120, performance: 'ultra' },
        'P70': { refreshRate: 120, performance: 'high' },
        'P60 Pro': { refreshRate: 120, performance: 'ultra' },
        'P60': { refreshRate: 120, performance: 'high' },
        'P50 Pro': { refreshRate: 120, performance: 'ultra' },
        'P50': { refreshRate: 90, performance: 'high' },
        'P40 Pro+': { refreshRate: 90, performance: 'ultra' },
        'P40 Pro': { refreshRate: 90, performance: 'ultra' },
        'P40': { refreshRate: 60, performance: 'high' },
        'P30 Pro': { refreshRate: 60, performance: 'high' },
        'P30': { refreshRate: 60, performance: 'high' },
        'P20 Pro': { refreshRate: 60, performance: 'high' },
        'P20': { refreshRate: 60, performance: 'medium' },
        
        // Mate Series
        'Mate 60 Pro+': { refreshRate: 120, performance: 'ultra' },
        'Mate 60 Pro': { refreshRate: 120, performance: 'ultra' },
        'Mate 60': { refreshRate: 120, performance: 'high' },
        'Mate 50 Pro': { refreshRate: 120, performance: 'ultra' },
        'Mate 50': { refreshRate: 90, performance: 'high' },
        'Mate 40 Pro+': { refreshRate: 90, performance: 'ultra' },
        'Mate 40 Pro': { refreshRate: 90, performance: 'ultra' },
        'Mate 40': { refreshRate: 90, performance: 'high' },
        'Mate 30 Pro': { refreshRate: 90, performance: 'ultra' },
        'Mate 30': { refreshRate: 60, performance: 'high' },
        'Mate 20 Pro': { refreshRate: 60, performance: 'high' },
        'Mate 20': { refreshRate: 60, performance: 'high' },
        
        // Nova Series
        'Nova 12 Ultra': { refreshRate: 120, performance: 'high' },
        'Nova 12 Pro': { refreshRate: 120, performance: 'high' },
        'Nova 12': { refreshRate: 120, performance: 'medium' },
        'Nova 11 Ultra': { refreshRate: 120, performance: 'high' },
        'Nova 11 Pro': { refreshRate: 120, performance: 'medium' },
        'Nova 11': { refreshRate: 120, performance: 'medium' },
        'Nova 10 Pro': { refreshRate: 120, performance: 'medium' },
        'Nova 10': { refreshRate: 90, performance: 'medium' },
        'Nova 9 Pro': { refreshRate: 120, performance: 'medium' },
        'Nova 9': { refreshRate: 90, performance: 'medium' },
        'Nova 8 Pro': { refreshRate: 90, performance: 'medium' },
        'Nova 8': { refreshRate: 90, performance: 'medium' },
        'Nova 7 Pro': { refreshRate: 90, performance: 'medium' },
        'Nova 7': { refreshRate: 60, performance: 'medium' },
        
        // Y Series
        'Y100A': { refreshRate: 90, performance: 'low' },
        'Y90': { refreshRate: 90, performance: 'low' },
        'Y70': { refreshRate: 90, performance: 'low' },
        'Y60': { refreshRate: 60, performance: 'low' },
        'Y50': { refreshRate: 60, performance: 'low' },
        'Y30': { refreshRate: 60, performance: 'low' },
        'Y20': { refreshRate: 60, performance: 'low' },
        'Y10': { refreshRate: 60, performance: 'low' }
    },

    oppo: {
        // Find X Series
        'Find X8 Pro': { refreshRate: 120, performance: 'ultra' },
        'Find X8': { refreshRate: 120, performance: 'high' },
        'Find X7 Ultra': { refreshRate: 120, performance: 'ultra' },
        'Find X7 Pro': { refreshRate: 120, performance: 'ultra' },
        'Find X7': { refreshRate: 120, performance: 'high' },
        'Find X6 Pro': { refreshRate: 120, performance: 'ultra' },
        'Find X6': { refreshRate: 120, performance: 'high' },
        'Find X5 Pro': { refreshRate: 120, performance: 'ultra' },
        'Find X5': { refreshRate: 120, performance: 'high' },
        'Find X3 Pro': { refreshRate: 120, performance: 'ultra' },
        'Find X3': { refreshRate: 90, performance: 'high' },
        'Find X2 Pro': { refreshRate: 120, performance: 'high' },
        'Find X2': { refreshRate: 90, performance: 'high' },
        
        // Reno Series
        'Reno 12 Pro': { refreshRate: 120, performance: 'high' },
        'Reno 12': { refreshRate: 120, performance: 'medium' },
        'Reno 11 Pro': { refreshRate: 120, performance: 'high' },
        'Reno 11': { refreshRate: 120, performance: 'medium' },
        'Reno 10 Pro+': { refreshRate: 120, performance: 'high' },
        'Reno 10 Pro': { refreshRate: 120, performance: 'medium' },
        'Reno 10': { refreshRate: 120, performance: 'medium' },
        'Reno 9 Pro+': { refreshRate: 120, performance: 'high' },
        'Reno 9 Pro': { refreshRate: 120, performance: 'medium' },
        'Reno 9': { refreshRate: 90, performance: 'medium' },
        'Reno 8 Pro+': { refreshRate: 120, performance: 'high' },
        'Reno 8 Pro': { refreshRate: 120, performance: 'medium' },
        'Reno 8': { refreshRate: 90, performance: 'medium' },
        'Reno 7 Pro': { refreshRate: 90, performance: 'medium' },
        'Reno 7': { refreshRate: 90, performance: 'medium' },
        'Reno 6 Pro+': { refreshRate: 90, performance: 'medium' },
        'Reno 6 Pro': { refreshRate: 90, performance: 'medium' },
        'Reno 6': { refreshRate: 90, performance: 'medium' },
        'Reno 5 Pro+': { refreshRate: 90, performance: 'medium' },
        'Reno 5 Pro': { refreshRate: 90, performance: 'medium' },
        'Reno 5': { refreshRate: 90, performance: 'medium' },
        
        // A Series
        'A3 Pro': { refreshRate: 120, performance: 'medium' },
        'A3': { refreshRate: 90, performance: 'medium' },
        'A2 Pro': { refreshRate: 120, performance: 'medium' },
        'A2': { refreshRate: 90, performance: 'medium' },
        'A1 Pro': { refreshRate: 120, performance: 'medium' },
        'A1': { refreshRate: 90, performance: 'low' },
        'A98': { refreshRate: 120, performance: 'medium' },
        'A78': { refreshRate: 90, performance: 'medium' },
        'A58': { refreshRate: 90, performance: 'low' },
        'A38': { refreshRate: 90, performance: 'low' },
        'A18': { refreshRate: 90, performance: 'low' },
        'A17': { refreshRate: 90, performance: 'low' },
        'A16': { refreshRate: 90, performance: 'low' },
        'A15': { refreshRate: 60, performance: 'low' },
        'A12': { refreshRate: 60, performance: 'low' },
        'A11': { refreshRate: 60, performance: 'low' }
    },

    vivo: {
        // X Series
        'X200 Pro': { refreshRate: 120, performance: 'ultra' },
        'X200': { refreshRate: 120, performance: 'high' },
        'X100 Ultra': { refreshRate: 120, performance: 'ultra' },
        'X100 Pro': { refreshRate: 120, performance: 'ultra' },
        'X100': { refreshRate: 120, performance: 'high' },
        'X90 Pro+': { refreshRate: 120, performance: 'ultra' },
        'X90 Pro': { refreshRate: 120, performance: 'ultra' },
        'X90': { refreshRate: 120, performance: 'high' },
        'X80 Pro': { refreshRate: 120, performance: 'ultra' },
        'X80': { refreshRate: 120, performance: 'high' },
        'X70 Pro+': { refreshRate: 120, performance: 'high' },
        'X70 Pro': { refreshRate: 120, performance: 'high' },
        'X70': { refreshRate: 120, performance: 'medium' },
        'X60 Pro+': { refreshRate: 120, performance: 'high' },
        'X60 Pro': { refreshRate: 120, performance: 'high' },
        'X60': { refreshRate: 120, performance: 'medium' },
        'X50 Pro+': { refreshRate: 120, performance: 'high' },
        'X50 Pro': { refreshRate: 90, performance: 'high' },
        'X50': { refreshRate: 90, performance: 'medium' },
        
        // V Series
        'V40 Pro': { refreshRate: 120, performance: 'high' },
        'V40': { refreshRate: 120, performance: 'medium' },
        'V30 Pro': { refreshRate: 120, performance: 'high' },
        'V30': { refreshRate: 120, performance: 'medium' },
        'V29 Pro': { refreshRate: 120, performance: 'medium' },
        'V29': { refreshRate: 120, performance: 'medium' },
        'V27 Pro': { refreshRate: 120, performance: 'medium' },
        'V27': { refreshRate: 120, performance: 'medium' },
        'V25 Pro': { refreshRate: 120, performance: 'medium' },
        'V25': { refreshRate: 90, performance: 'medium' },
        'V23 Pro': { refreshRate: 90, performance: 'medium' },
        'V23': { refreshRate: 90, performance: 'medium' },
        'V21': { refreshRate: 90, performance: 'medium' },
        'V20 Pro': { refreshRate: 90, performance: 'medium' },
        'V20': { refreshRate: 60, performance: 'medium' },
        
        // iQOO Series
        'iQOO 12 Pro': { refreshRate: 144, performance: 'ultra' },
        'iQOO 12': { refreshRate: 144, performance: 'ultra' },
        'iQOO 11 Pro': { refreshRate: 144, performance: 'ultra' },
        'iQOO 11': { refreshRate: 144, performance: 'ultra' },
        'iQOO 10 Pro': { refreshRate: 120, performance: 'ultra' },
        'iQOO 10': { refreshRate: 120, performance: 'high' },
        'iQOO 9 Pro': { refreshRate: 120, performance: 'ultra' },
        'iQOO 9': { refreshRate: 120, performance: 'high' },
        'iQOO 8 Pro': { refreshRate: 120, performance: 'ultra' },
        'iQOO 8': { refreshRate: 120, performance: 'high' },
        'iQOO 7': { refreshRate: 120, performance: 'high' },
        'iQOO Neo 9 Pro': { refreshRate: 144, performance: 'high' },
        'iQOO Neo 9': { refreshRate: 120, performance: 'high' },
        'iQOO Neo 8 Pro': { refreshRate: 144, performance: 'high' },
        'iQOO Neo 8': { refreshRate: 120, performance: 'medium' },
        'iQOO Neo 7 Pro': { refreshRate: 120, performance: 'high' },
        'iQOO Neo 7': { refreshRate: 120, performance: 'medium' },
        'iQOO Neo 6': { refreshRate: 120, performance: 'medium' },
        'iQOO Neo 5': { refreshRate: 120, performance: 'medium' },
        
        // Y Series
        'Y200 Pro': { refreshRate: 120, performance: 'medium' },
        'Y200': { refreshRate: 120, performance: 'medium' },
        'Y100': { refreshRate: 120, performance: 'medium' },
        'Y78': { refreshRate: 120, performance: 'medium' },
        'Y56': { refreshRate: 90, performance: 'low' },
        'Y36': { refreshRate: 90, performance: 'low' },
        'Y27': { refreshRate: 90, performance: 'low' },
        'Y22': { refreshRate: 60, performance: 'low' },
        'Y21': { refreshRate: 60, performance: 'low' },
        'Y20': { refreshRate: 60, performance: 'low' },
        'Y17': { refreshRate: 60, performance: 'low' },
        'Y16': { refreshRate: 60, performance: 'low' },
        'Y15': { refreshRate: 60, performance: 'low' },
        'Y12': { refreshRate: 60, performance: 'low' },
        'Y11': { refreshRate: 60, performance: 'low' }
    },

    realme: {
        // GT Series
        'GT 6': { refreshRate: 120, performance: 'ultra' },
        'GT 5 Pro': { refreshRate: 144, performance: 'ultra' },
        'GT 5': { refreshRate: 144, performance: 'high' },
        'GT Neo 6 SE': { refreshRate: 144, performance: 'high' },
        'GT Neo 6': { refreshRate: 120, performance: 'high' },
        'GT Neo 5 SE': { refreshRate: 144, performance: 'high' },
        'GT Neo 5': { refreshRate: 144, performance: 'high' },
        'GT Neo 3T': { refreshRate: 120, performance: 'high' },
        'GT Neo 3': { refreshRate: 120, performance: 'high' },
        'GT Neo 2T': { refreshRate: 120, performance: 'medium' },
        'GT Neo 2': { refreshRate: 120, performance: 'medium' },
        'GT Neo': { refreshRate: 120, performance: 'medium' },
        'GT 3': { refreshRate: 120, performance: 'high' },
        'GT 2 Pro': { refreshRate: 120, performance: 'high' },
        'GT 2': { refreshRate: 120, performance: 'high' },
        'GT Master Edition': { refreshRate: 120, performance: 'high' },
        'GT': { refreshRate: 120, performance: 'high' },
        
        // Number Series
        '13 Pro+': { refreshRate: 120, performance: 'high' },
        '13 Pro': { refreshRate: 120, performance: 'medium' },
        '13': { refreshRate: 120, performance: 'medium' },
        '12 Pro+': { refreshRate: 120, performance: 'high' },
        '12 Pro': { refreshRate: 120, performance: 'medium' },
        '12': { refreshRate: 90, performance: 'medium' },
        '11 Pro+': { refreshRate: 120, performance: 'medium' },
        '11 Pro': { refreshRate: 120, performance: 'medium' },
        '11': { refreshRate: 90, performance: 'medium' },
        '10 Pro+': { refreshRate: 120, performance: 'medium' },
        '10 Pro': { refreshRate: 120, performance: 'medium' },
        '10': { refreshRate: 90, performance: 'medium' },
        '9 Pro+': { refreshRate: 90, performance: 'medium' },
        '9 Pro': { refreshRate: 90, performance: 'medium' },
        '9': { refreshRate: 90, performance: 'medium' },
        '8 Pro': { refreshRate: 90, performance: 'medium' },
        '8': { refreshRate: 90, performance: 'medium' },
        '7 Pro': { refreshRate: 90, performance: 'medium' },
        '7': { refreshRate: 90, performance: 'medium' },
        '6 Pro': { refreshRate: 90, performance: 'medium' },
        '6': { refreshRate: 90, performance: 'medium' },
        
        // C Series
        'C67': { refreshRate: 120, performance: 'medium' },
        'C65': { refreshRate: 90, performance: 'low' },
        'C63': { refreshRate: 90, performance: 'low' },
        'C61': { refreshRate: 90, performance: 'low' },
        'C55': { refreshRate: 90, performance: 'low' },
        'C53': { refreshRate: 90, performance: 'low' },
        'C51': { refreshRate: 60, performance: 'low' },
        'C35': { refreshRate: 60, performance: 'low' },
        'C33': { refreshRate: 60, performance: 'low' },
        'C31': { refreshRate: 60, performance: 'low' },
        'C25': { refreshRate: 60, performance: 'low' },
        'C21': { refreshRate: 60, performance: 'low' },
        'C20': { refreshRate: 60, performance: 'low' },
        'C17': { refreshRate: 60, performance: 'low' },
        'C15': { refreshRate: 60, performance: 'low' },
        'C12': { refreshRate: 60, performance: 'low' },
        'C11': { refreshRate: 60, performance: 'low' }
    },

    oneplus: {
        // Flagship Series
        'OnePlus 12': { refreshRate: 120, performance: 'ultra' },
        'OnePlus 11': { refreshRate: 120, performance: 'ultra' },
        'OnePlus 10 Pro': { refreshRate: 120, performance: 'ultra' },
        'OnePlus 10T': { refreshRate: 120, performance: 'ultra' },
        'OnePlus 9 Pro': { refreshRate: 120, performance: 'ultra' },
        'OnePlus 9': { refreshRate: 120, performance: 'high' },
        'OnePlus 8T': { refreshRate: 120, performance: 'high' },
        'OnePlus 8 Pro': { refreshRate: 120, performance: 'high' },
        'OnePlus 8': { refreshRate: 90, performance: 'high' },
        'OnePlus 7T Pro': { refreshRate: 90, performance: 'high' },
        'OnePlus 7T': { refreshRate: 90, performance: 'high' },
        'OnePlus 7 Pro': { refreshRate: 90, performance: 'high' },
        'OnePlus 7': { refreshRate: 60, performance: 'high' },
        'OnePlus 6T': { refreshRate: 60, performance: 'high' },
        'OnePlus 6': { refreshRate: 60, performance: 'high' },
        
        // Nord Series
        'OnePlus Nord 4': { refreshRate: 120, performance: 'medium' },
        'OnePlus Nord 3': { refreshRate: 120, performance: 'medium' },
        'OnePlus Nord 2T': { refreshRate: 90, performance: 'medium' },
        'OnePlus Nord 2': { refreshRate: 90, performance: 'medium' },
        'OnePlus Nord': { refreshRate: 90, performance: 'medium' },
        'OnePlus Nord CE 4': { refreshRate: 120, performance: 'medium' },
        'OnePlus Nord CE 3': { refreshRate: 120, performance: 'medium' },
        'OnePlus Nord CE 2': { refreshRate: 90, performance: 'medium' },
        'OnePlus Nord CE': { refreshRate: 90, performance: 'medium' },
        'OnePlus Nord N30': { refreshRate: 120, performance: 'medium' },
        'OnePlus Nord N20': { refreshRate: 60, performance: 'medium' },
        'OnePlus Nord N200': { refreshRate: 90, performance: 'low' },
        'OnePlus Nord N100': { refreshRate: 90, performance: 'low' },
        'OnePlus Nord N10': { refreshRate: 90, performance: 'low' }
    },

    motorola: {
        // Edge Series
        'Edge 50 Ultra': { refreshRate: 144, performance: 'ultra' },
        'Edge 50 Pro': { refreshRate: 144, performance: 'high' },
        'Edge 50': { refreshRate: 120, performance: 'medium' },
        'Edge 40 Pro': { refreshRate: 165, performance: 'ultra' },
        'Edge 40': { refreshRate: 144, performance: 'high' },
        'Edge 30 Ultra': { refreshRate: 144, performance: 'ultra' },
        'Edge 30 Pro': { refreshRate: 144, performance: 'high' },
        'Edge 30': { refreshRate: 144, performance: 'medium' },
        'Edge 20 Pro': { refreshRate: 144, performance: 'high' },
        'Edge 20': { refreshRate: 144, performance: 'medium' },
        'Edge+': { refreshRate: 90, performance: 'high' },
        'Edge': { refreshRate: 90, performance: 'medium' },
        
        // Moto G Series
        'Moto G85': { refreshRate: 120, performance: 'medium' },
        'Moto G84': { refreshRate: 120, performance: 'medium' },
        'Moto G82': { refreshRate: 120, performance: 'medium' },
        'Moto G73': { refreshRate: 120, performance: 'medium' },
        'Moto G72': { refreshRate: 120, performance: 'medium' },
        'Moto G71': { refreshRate: 120, performance: 'medium' },
        'Moto G62': { refreshRate: 120, performance: 'medium' },
        'Moto G61': { refreshRate: 120, performance: 'medium' },
        'Moto G60': { refreshRate: 120, performance: 'medium' },
        'Moto G54': { refreshRate: 120, performance: 'medium' },
        'Moto G53': { refreshRate: 120, performance: 'medium' },
        'Moto G52': { refreshRate: 90, performance: 'medium' },
        'Moto G51': { refreshRate: 120, performance: 'medium' },
        'Moto G50': { refreshRate: 90, performance: 'medium' },
        'Moto G42': { refreshRate: 90, performance: 'low' },
        'Moto G41': { refreshRate: 90, performance: 'low' },
        'Moto G40': { refreshRate: 120, performance: 'medium' },
        'Moto G34': { refreshRate: 120, performance: 'low' },
        'Moto G32': { refreshRate: 90, performance: 'low' },
        'Moto G31': { refreshRate: 90, performance: 'low' },
        'Moto G30': { refreshRate: 90, performance: 'low' },
        'Moto G24': { refreshRate: 90, performance: 'low' },
        'Moto G23': { refreshRate: 90, performance: 'low' },
        'Moto G22': { refreshRate: 90, performance: 'low' },
        'Moto G21': { refreshRate: 90, performance: 'low' },
        'Moto G20': { refreshRate: 90, performance: 'low' },
        'Moto G14': { refreshRate: 90, performance: 'low' },
        'Moto G13': { refreshRate: 90, performance: 'low' },
        'Moto G12': { refreshRate: 90, performance: 'low' },
        'Moto G10': { refreshRate: 90, performance: 'low' },
        
        // Moto E Series
        'Moto E40': { refreshRate: 90, performance: 'low' },
        'Moto E32': { refreshRate: 90, performance: 'low' },
        'Moto E30': { refreshRate: 90, performance: 'low' },
        'Moto E22': { refreshRate: 90, performance: 'low' },
        'Moto E20': { refreshRate: 60, performance: 'low' },
        'Moto E13': { refreshRate: 90, performance: 'low' }
    },

    honor: {
        // Magic Series
        'Magic6 Ultimate': { refreshRate: 120, performance: 'ultra' },
        'Magic6 Pro': { refreshRate: 120, performance: 'ultra' },
        'Magic6': { refreshRate: 120, performance: 'high' },
        'Magic5 Ultimate': { refreshRate: 120, performance: 'ultra' },
        'Magic5 Pro': { refreshRate: 120, performance: 'ultra' },
        'Magic5': { refreshRate: 120, performance: 'high' },
        'Magic4 Ultimate': { refreshRate: 120, performance: 'ultra' },
        'Magic4 Pro': { refreshRate: 120, performance: 'ultra' },
        'Magic4': { refreshRate: 120, performance: 'high' },
        'Magic3 Pro+': { refreshRate: 120, performance: 'ultra' },
        'Magic3 Pro': { refreshRate: 120, performance: 'high' },
        'Magic3': { refreshRate: 120, performance: 'high' },
        
        // Honor Series
        'Honor 200 Pro': { refreshRate: 120, performance: 'high' },
        'Honor 200': { refreshRate: 120, performance: 'medium' },
        'Honor 100 Pro': { refreshRate: 120, performance: 'high' },
        'Honor 100': { refreshRate: 120, performance: 'medium' },
        'Honor 90 Pro': { refreshRate: 120, performance: 'high' },
        'Honor 90': { refreshRate: 120, performance: 'medium' },
        'Honor 80 Pro': { refreshRate: 120, performance: 'high' },
        'Honor 80': { refreshRate: 120, performance: 'medium' },
        'Honor 70 Pro+': { refreshRate: 120, performance: 'high' },
        'Honor 70 Pro': { refreshRate: 120, performance: 'medium' },
        'Honor 70': { refreshRate: 120, performance: 'medium' },
        'Honor 60 Pro+': { refreshRate: 120, performance: 'high' },
        'Honor 60 Pro': { refreshRate: 120, performance: 'medium' },
        'Honor 60': { refreshRate: 120, performance: 'medium' },
        'Honor 50 Pro+': { refreshRate: 120, performance: 'medium' },
        'Honor 50 Pro': { refreshRate: 120, performance: 'medium' },
        'Honor 50': { refreshRate: 120, performance: 'medium' },
        
        // X Series
        'Honor X50 Pro': { refreshRate: 120, performance: 'medium' },
        'Honor X50': { refreshRate: 120, performance: 'medium' },
        'Honor X40 GT': { refreshRate: 144, performance: 'medium' },
        'Honor X40': { refreshRate: 120, performance: 'medium' },
        'Honor X30': { refreshRate: 120, performance: 'medium' },
        'Honor X20': { refreshRate: 120, performance: 'medium' },
        'Honor X10': { refreshRate: 90, performance: 'medium' },
        
        // Play Series
        'Honor Play 8T': { refreshRate: 90, performance: 'low' },
        'Honor Play 7T': { refreshRate: 90, performance: 'low' },
        'Honor Play 6T': { refreshRate: 90, performance: 'low' },
        'Honor Play 5T': { refreshRate: 90, performance: 'low' },
        'Honor Play 40': { refreshRate: 90, performance: 'low' },
        'Honor Play 30': { refreshRate: 90, performance: 'low' },
        'Honor Play 20': { refreshRate: 60, performance: 'low' }
    },

    nothing: {
        // Phone Series
        'Phone (2a) Plus': { refreshRate: 120, performance: 'high' },
        'Phone (2a)': { refreshRate: 120, performance: 'medium' },
        'Phone (2)': { refreshRate: 120, performance: 'high' },
        'Phone (1)': { refreshRate: 120, performance: 'medium' },
        
        // CMF Series
        'CMF Phone 1': { refreshRate: 120, performance: 'medium' }
    },

    asus: {
        // ROG Phone Series
        'ROG Phone 8 Pro': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 8': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 7 Ultimate': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 7': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 6D Ultimate': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 6D': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 6 Pro': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 6': { refreshRate: 165, performance: 'ultra' },
        'ROG Phone 5s Pro': { refreshRate: 144, performance: 'ultra' },
        'ROG Phone 5s': { refreshRate: 144, performance: 'ultra' },
        'ROG Phone 5 Ultimate': { refreshRate: 144, performance: 'ultra' },
        'ROG Phone 5 Pro': { refreshRate: 144, performance: 'ultra' },
        'ROG Phone 5': { refreshRate: 144, performance: 'ultra' },
        'ROG Phone 3': { refreshRate: 144, performance: 'ultra' },
        'ROG Phone 2': { refreshRate: 120, performance: 'ultra' },
        'ROG Phone': { refreshRate: 90, performance: 'high' },
        
        // Zenfone Series
        'Zenfone 11 Ultra': { refreshRate: 144, performance: 'ultra' },
        'Zenfone 10': { refreshRate: 144, performance: 'high' },
        'Zenfone 9': { refreshRate: 120, performance: 'high' },
        'Zenfone 8 Flip': { refreshRate: 90, performance: 'high' },
        'Zenfone 8': { refreshRate: 120, performance: 'high' },
        'Zenfone 7 Pro': { refreshRate: 90, performance: 'high' },
        'Zenfone 7': { refreshRate: 90, performance: 'high' },
        'Zenfone 6': { refreshRate: 60, performance: 'high' }
    },

    sony: {
        // Xperia 1 Series
        'Xperia 1 VI': { refreshRate: 120, performance: 'ultra' },
        'Xperia 1 V': { refreshRate: 120, performance: 'ultra' },
        'Xperia 1 IV': { refreshRate: 120, performance: 'ultra' },
        'Xperia 1 III': { refreshRate: 120, performance: 'ultra' },
        'Xperia 1 II': { refreshRate: 60, performance: 'high' },
        'Xperia 1': { refreshRate: 60, performance: 'high' },
        
        // Xperia 5 Series
        'Xperia 5 V': { refreshRate: 120, performance: 'high' },
        'Xperia 5 IV': { refreshRate: 120, performance: 'high' },
        'Xperia 5 III': { refreshRate: 120, performance: 'high' },
        'Xperia 5 II': { refreshRate: 120, performance: 'high' },
        'Xperia 5': { refreshRate: 60, performance: 'high' },
        
        // Xperia 10 Series
        'Xperia 10 VI': { refreshRate: 60, performance: 'medium' },
        'Xperia 10 V': { refreshRate: 60, performance: 'medium' },
        'Xperia 10 IV': { refreshRate: 60, performance: 'medium' },
        'Xperia 10 III': { refreshRate: 60, performance: 'medium' },
        'Xperia 10 II': { refreshRate: 60, performance: 'medium' },
        'Xperia 10': { refreshRate: 60, performance: 'medium' },
        
        // Xperia Pro Series
        'Xperia Pro-I': { refreshRate: 120, performance: 'ultra' },
        'Xperia Pro': { refreshRate: 60, performance: 'high' }
    },

    google: {
        // Pixel Series
        'Pixel 9 Pro XL': { refreshRate: 120, performance: 'ultra' },
        'Pixel 9 Pro': { refreshRate: 120, performance: 'ultra' },
        'Pixel 9': { refreshRate: 120, performance: 'high' },
        'Pixel 8 Pro': { refreshRate: 120, performance: 'ultra' },
        'Pixel 8': { refreshRate: 120, performance: 'high' },
        'Pixel 7 Pro': { refreshRate: 120, performance: 'high' },
        'Pixel 7': { refreshRate: 90, performance: 'high' },
        'Pixel 6 Pro': { refreshRate: 120, performance: 'high' },
        'Pixel 6': { refreshRate: 90, performance: 'high' },
        'Pixel 5': { refreshRate: 90, performance: 'medium' },
        'Pixel 4 XL': { refreshRate: 90, performance: 'medium' },
        'Pixel 4': { refreshRate: 90, performance: 'medium' },
        'Pixel 3 XL': { refreshRate: 60, performance: 'medium' },
        'Pixel 3': { refreshRate: 60, performance: 'medium' },
        
        // Pixel A Series
        'Pixel 8a': { refreshRate: 120, performance: 'medium' },
        'Pixel 7a': { refreshRate: 90, performance: 'medium' },
        'Pixel 6a': { refreshRate: 60, performance: 'medium' },
        'Pixel 5a': { refreshRate: 60, performance: 'medium' },
        'Pixel 4a': { refreshRate: 60, performance: 'medium' },
        'Pixel 3a XL': { refreshRate: 60, performance: 'medium' },
        'Pixel 3a': { refreshRate: 60, performance: 'medium' }
    },

    tcl: {
        // TCL Series
        'TCL 50 Pro NXTPAPER': { refreshRate: 120, performance: 'medium' },
        'TCL 40 NXTPAPER': { refreshRate: 90, performance: 'medium' },
        'TCL 30 XE': { refreshRate: 60, performance: 'low' },
        'TCL 20 Pro 5G': { refreshRate: 60, performance: 'medium' },
        'TCL 20L+': { refreshRate: 60, performance: 'medium' },
        'TCL 20L': { refreshRate: 60, performance: 'low' },
        'TCL 20 5G': { refreshRate: 60, performance: 'medium' },
        'TCL 20S': { refreshRate: 60, performance: 'medium' },
        'TCL 20SE': { refreshRate: 60, performance: 'low' },
        'TCL 10 Pro': { refreshRate: 60, performance: 'medium' },
        'TCL 10L': { refreshRate: 60, performance: 'low' },
        'TCL 10 5G': { refreshRate: 60, performance: 'medium' }
    },

    infinix: {
        // Note Series
        'Note 40 Pro+': { refreshRate: 120, performance: 'medium' },
        'Note 40 Pro': { refreshRate: 120, performance: 'medium' },
        'Note 40': { refreshRate: 90, performance: 'medium' },
        'Note 30 Pro': { refreshRate: 120, performance: 'medium' },
        'Note 30': { refreshRate: 90, performance: 'medium' },
        'Note 12 Pro': { refreshRate: 120, performance: 'medium' },
        'Note 12': { refreshRate: 90, performance: 'medium' },
        'Note 11 Pro': { refreshRate: 120, performance: 'medium' },
        'Note 11': { refreshRate: 90, performance: 'medium' },
        'Note 10 Pro': { refreshRate: 90, performance: 'medium' },
        'Note 10': { refreshRate: 90, performance: 'medium' },
        
        // Zero Series
        'Zero 30 5G': { refreshRate: 144, performance: 'high' },
        'Zero 20': { refreshRate: 144, performance: 'high' },
        'Zero 8i': { refreshRate: 90, performance: 'medium' },
        'Zero 8': { refreshRate: 90, performance: 'medium' },
        
        // Hot Series
        'Hot 50 Pro+': { refreshRate: 120, performance: 'medium' },
        'Hot 50 Pro': { refreshRate: 120, performance: 'medium' },
        'Hot 50': { refreshRate: 90, performance: 'low' },
        'Hot 40 Pro': { refreshRate: 120, performance: 'medium' },
        'Hot 40': { refreshRate: 90, performance: 'low' },
        'Hot 30 Pro': { refreshRate: 90, performance: 'medium' },
        'Hot 30': { refreshRate: 90, performance: 'low' },
        'Hot 20 Pro': { refreshRate: 90, performance: 'low' },
        'Hot 20': { refreshRate: 90, performance: 'low' },
        'Hot 12 Pro': { refreshRate: 90, performance: 'low' },
        'Hot 12': { refreshRate: 90, performance: 'low' },
        'Hot 11 Pro': { refreshRate: 90, performance: 'low' },
        'Hot 11': { refreshRate: 90, performance: 'low' },
        'Hot 10 Pro': { refreshRate: 90, performance: 'low' },
        'Hot 10': { refreshRate: 60, performance: 'low' }
    },

    tecno: {
        // Phantom Series
        'Phantom V Fold2': { refreshRate: 120, performance: 'high' },
        'Phantom V Fold': { refreshRate: 120, performance: 'high' },
        'Phantom V Flip2': { refreshRate: 120, performance: 'high' },
        'Phantom V Flip': { refreshRate: 120, performance: 'medium' },
        'Phantom X2 Pro': { refreshRate: 120, performance: 'high' },
        'Phantom X2': { refreshRate: 120, performance: 'medium' },
        'Phantom X': { refreshRate: 90, performance: 'medium' },
        
        // Camon Series
        'Camon 30 Premier': { refreshRate: 120, performance: 'medium' },
        'Camon 30 Pro': { refreshRate: 120, performance: 'medium' },
        'Camon 30': { refreshRate: 120, performance: 'medium' },
        'Camon 20 Premier': { refreshRate: 120, performance: 'medium' },
        'Camon 20 Pro': { refreshRate: 120, performance: 'medium' },
        'Camon 20': { refreshRate: 90, performance: 'medium' },
        'Camon 19 Pro': { refreshRate: 120, performance: 'medium' },
        'Camon 19': { refreshRate: 90, performance: 'medium' },
        'Camon 18 Premier': { refreshRate: 120, performance: 'medium' },
        'Camon 18P': { refreshRate: 90, performance: 'medium' },
        'Camon 18': { refreshRate: 90, performance: 'medium' },
        'Camon 17 Pro': { refreshRate: 90, performance: 'medium' },
        'Camon 17': { refreshRate: 90, performance: 'medium' },
        
        // Pova Series
        'Pova 6 Pro': { refreshRate: 120, performance: 'medium' },
        'Pova 6': { refreshRate: 120, performance: 'medium' },
        'Pova 5 Pro': { refreshRate: 120, performance: 'medium' },
        'Pova 5': { refreshRate: 120, performance: 'medium' },
        'Pova 4 Pro': { refreshRate: 90, performance: 'medium' },
        'Pova 4': { refreshRate: 90, performance: 'medium' },
        'Pova 3': { refreshRate: 90, performance: 'medium' },
        'Pova 2': { refreshRate: 90, performance: 'medium' },
        'Pova': { refreshRate: 90, performance: 'medium' },
        
        // Spark Series
        'Spark 30 Pro': { refreshRate: 120, performance: 'medium' },
        'Spark 30': { refreshRate: 90, performance: 'low' },
        'Spark 20 Pro+': { refreshRate: 120, performance: 'medium' },
        'Spark 20 Pro': { refreshRate: 90, performance: 'medium' },
        'Spark 20': { refreshRate: 90, performance: 'low' },
        'Spark 10 Pro': { refreshRate: 90, performance: 'low' },
        'Spark 10': { refreshRate: 90, performance: 'low' },
        'Spark 9 Pro': { refreshRate: 90, performance: 'low' },
        'Spark 9': { refreshRate: 90, performance: 'low' },
        'Spark 8 Pro': { refreshRate: 90, performance: 'low' },
        'Spark 8': { refreshRate: 90, performance: 'low' },
        'Spark 7 Pro': { refreshRate: 90, performance: 'low' },
        'Spark 7': { refreshRate: 60, performance: 'low' }
    },

    nokia: {
        // Nokia G Series
        'Nokia G60 5G': { refreshRate: 120, performance: 'medium' },
        'Nokia G50': { refreshRate: 60, performance: 'medium' },
        'Nokia G42': { refreshRate: 90, performance: 'medium' },
        'Nokia G40': { refreshRate: 90, performance: 'medium' },
        'Nokia G22': { refreshRate: 90, performance: 'low' },
        'Nokia G21': { refreshRate: 90, performance: 'low' },
        'Nokia G20': { refreshRate: 60, performance: 'low' },
        'Nokia G11': { refreshRate: 90, performance: 'low' },
        'Nokia G10': { refreshRate: 60, performance: 'low' },
        
        // Nokia X Series
        'Nokia X30': { refreshRate: 90, performance: 'medium' },
        'Nokia X20': { refreshRate: 60, performance: 'medium' },
        'Nokia X10': { refreshRate: 60, performance: 'medium' },
        
        // Nokia C Series
        'Nokia C32': { refreshRate: 60, performance: 'low' },
        'Nokia C31': { refreshRate: 60, performance: 'low' },
        'Nokia C30': { refreshRate: 60, performance: 'low' },
        'Nokia C21': { refreshRate: 60, performance: 'low' },
        'Nokia C20': { refreshRate: 60, performance: 'low' },
        'Nokia C12': { refreshRate: 60, performance: 'low' },
        'Nokia C10': { refreshRate: 60, performance: 'low' }
    },

    blackview: {
        // BL Series
        'BL9000 Pro': { refreshRate: 120, performance: 'high' },
        'BL9000': { refreshRate: 120, performance: 'medium' },
        'BL8800 Pro': { refreshRate: 120, performance: 'medium' },
        'BL8800': { refreshRate: 90, performance: 'medium' },
        'BL6000 Pro': { refreshRate: 90, performance: 'medium' },
        'BL6000': { refreshRate: 90, performance: 'medium' },
        
        // A Series
        'A96': { refreshRate: 90, performance: 'medium' },
        'A95': { refreshRate: 90, performance: 'medium' },
        'A85': { refreshRate: 90, performance: 'medium' },
        'A80': { refreshRate: 90, performance: 'low' },
        'A70': { refreshRate: 60, performance: 'low' },
        'A60 Pro': { refreshRate: 60, performance: 'low' },
        'A55 Pro': { refreshRate: 60, performance: 'low' },
        'A52 Pro': { refreshRate: 60, performance: 'low' }
    },

    ulefone: {
        // Armor Series
        'Armor 26 Ultra': { refreshRate: 120, performance: 'high' },
        'Armor 25T Pro': { refreshRate: 120, performance: 'medium' },
        'Armor 24': { refreshRate: 90, performance: 'medium' },
        'Armor 23 Ultra': { refreshRate: 120, performance: 'medium' },
        'Armor 22': { refreshRate: 90, performance: 'medium' },
        'Armor 21': { refreshRate: 90, performance: 'medium' },
        'Armor 20WT': { refreshRate: 90, performance: 'medium' },
        'Armor 17 Pro': { refreshRate: 90, performance: 'medium' },
        'Armor 15': { refreshRate: 60, performance: 'medium' },
        'Armor 12': { refreshRate: 60, performance: 'medium' },
        'Armor 11T': { refreshRate: 60, performance: 'medium' },
        'Armor 10': { refreshRate: 60, performance: 'medium' },
        
        // Note Series
        'Note 18 Pro': { refreshRate: 120, performance: 'medium' },
        'Note 17 Pro': { refreshRate: 120, performance: 'medium' },
        'Note 16 Pro': { refreshRate: 90, performance: 'medium' },
        'Note 15': { refreshRate: 90, performance: 'medium' },
        'Note 13P': { refreshRate: 90, performance: 'medium' },
        'Note 12': { refreshRate: 60, performance: 'medium' },
        'Note 11P': { refreshRate: 60, performance: 'medium' },
        'Note 10': { refreshRate: 60, performance: 'low' }
    }
};

// DOM Elements
const brandSelect = document.getElementById('brandSelect');
const modelSelect = document.getElementById('modelSelect');
const generateBtn = document.getElementById('generateBtn');
const loading = document.getElementById('loading');
const results = document.getElementById('results');

// Event Listeners
brandSelect.addEventListener('change', handleBrandChange);
modelSelect.addEventListener('change', handleModelChange);
generateBtn.addEventListener('click', handleGenerateClick);

function handleBrandChange() {
    const selectedBrand = brandSelect.value;
    
    // Clear and reset model select
    modelSelect.innerHTML = '<option value="">Seleccionar modelo...</option>';
    modelSelect.disabled = true;
    generateBtn.disabled = true;
    results.style.display = 'none';
    
    if (selectedBrand && deviceDatabase[selectedBrand]) {
        modelSelect.disabled = false;
        
        // Add all models for the selected brand
        const models = Object.keys(deviceDatabase[selectedBrand]).sort();
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
}

function handleModelChange() {
    const selectedModel = modelSelect.value;
    
    if (selectedModel) {
        generateBtn.disabled = false;
    } else {
        generateBtn.disabled = true;
        results.style.display = 'none';
    }
}

function handleGenerateClick() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    
    if (!brand || !model) {
        alert('Por favor selecciona una marca y modelo');
        return;
    }

    // Show loading state
    showLoading();
    
    // Simulate processing time for better UX
    setTimeout(() => {
        generateSensitivities(brand, model);
        hideLoading();
        showResults();
    }, 2000);
}

function showLoading() {
    loading.style.display = 'block';
    results.style.display = 'none';
    generateBtn.disabled = true;
    generateBtn.textContent = 'Generando...';
}

function hideLoading() {
    loading.style.display = 'none';
    generateBtn.disabled = false;
    generateBtn.textContent = 'Generar sensibilidad';
}

function showResults() {
    results.style.display = 'block';
    results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function generateSensitivities(brand, model) {
    const device = deviceDatabase[brand][model];
    
    if (!device) {
        alert('Dispositivo no encontrado en la base de datos');
        return;
    }
    
    const refreshRate = device.refreshRate;
    const performance = device.performance;

    // Advanced sensitivity calculation based on device performance and refresh rate
    let baseSensitivity;
    let dpi;

    switch (performance) {
        case 'ultra':
            baseSensitivity = refreshRate >= 144 ? 180 : refreshRate >= 120 ? 175 : 165;
            dpi = 450;
            break;
        case 'high':
            baseSensitivity = refreshRate >= 144 ? 170 : refreshRate >= 120 ? 165 : 155;
            dpi = 400;
            break;
        case 'medium':
            baseSensitivity = refreshRate >= 120 ? 150 : refreshRate >= 90 ? 140 : 130;
            dpi = 350;
            break;
        case 'low':
            baseSensitivity = refreshRate >= 90 ? 125 : 115;
            dpi = 300;
            break;
        default:
            baseSensitivity = 140;
            dpi = 350;
    }

    // Refresh rate specific optimizations for Free Fire v1.111.1
    if (refreshRate >= 165) {
        baseSensitivity += 25;
    } else if (refreshRate >= 144) {
        baseSensitivity += 20;
    } else if (refreshRate >= 120) {
        baseSensitivity += 15;
    } else if (refreshRate >= 90) {
        baseSensitivity += 8;
    }

    // Calculate optimized sensitivities for competitive gameplay
    const sensitivities = {
        general: baseSensitivity,
        redDot: Math.round(baseSensitivity * 0.34), // Optimized for quick target acquisition
        x2: Math.round(baseSensitivity * 0.66),     // Balanced for medium range engagements
        x4: Math.round(baseSensitivity * 0.56),     // Precise for long range shots
        x8: Math.round(baseSensitivity * 0.40),     // Ultra precise for sniper shots
        buttonSize: refreshRate >= 144 ? 48 : refreshRate >= 120 ? 46 : refreshRate >= 90 ? 44 : 42,
        dpi: dpi
    };

    // Update the UI with calculated values
    updateResultsUI(model, sensitivities, refreshRate);
}

function updateResultsUI(deviceName, sensitivities, refreshRate) {
    document.getElementById('deviceName').textContent = deviceName;
    document.getElementById('generalSens').textContent = sensitivities.general;
    document.getElementById('redDotSens').textContent = sensitivities.redDot;
    document.getElementById('x2Sens').textContent = sensitivities.x2;
    document.getElementById('x4Sens').textContent = sensitivities.x4;
    document.getElementById('x8Sens').textContent = sensitivities.x8;
    document.getElementById('buttonSize').textContent = sensitivities.buttonSize;
    document.getElementById('dpiValue').textContent = sensitivities.dpi;
    document.getElementById('refreshRate').textContent = refreshRate + 'Hz';
}

// Initialize the application
function initializeApp() {
    console.log('ChivoxSens Generator v1.111.1 initialized');
    
    // Calculate total devices
    const totalDevices = Object.values(deviceDatabase).reduce((total, brand) => 
        total + Object.keys(brand).length, 0
    );
    
    console.log(`Total devices in database: ${totalDevices}`);
    document.getElementById('deviceCount').textContent = `${totalDevices}+`;
    
    // Log brand statistics
    Object.keys(deviceDatabase).forEach(brand => {
        console.log(`${brand.toUpperCase()}: ${Object.keys(deviceDatabase[brand]).length} devices`);
    });
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);