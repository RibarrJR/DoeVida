App.controller('mapsControl', function ($scope, $log) {
    $scope.map = { 
        center: {  latitude: -30.043261, longitude: -51.199044  }, zoom: 13,
            markers: [ 
                {id: 0, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Complexo Hospitalar Santa Casa<br>Rua Professor Annes Dias, 295 - Acesso pela Av. Independência, 75 <br>Bairro: Centro Histórico - Porto Alegre - RS<br>Fone: (51) 3214-8025 \/ (51) 3214-8585',coords: { latitude: -30.029736, longitude: -51.221781  } }, 
                { id: 1, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Hospital Mãe de Deus<br>Rua José de Alencar, 286 - 3° Andar <br>Bairro:  Menino Deus - Porto Alegre - RS<br>Fone: (51) 3230-2309 \/ (51) 3230-2000',coords: { latitude: -30.059261, longitude: -51.229044  }  },
                { id: 2, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Hospital de Clínicas de Porto Alegre<br>Endereço: Rua São Manoel, 543 - 2° Andar<br>Bairro: Rio Branco - Porto Alegre - RS.<br>Fone: (51) 3359-8504',coords: { latitude: -30.038337, longitude: -51.207104  }  },
                { id: 3, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Hospital Moinhos de Vento<br>Rua Ramiro Barcelos, 910 - Térreo<br>Bairro: Porto Alegre - RS.<br>Fone:  (51) 3314-6960',coords: { latitude: -30.025854, longitude: -51.209164  }  },
                { id: 4, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Hospital Nossa Senhora da Conceição<br>Avenida Francisco Trein, 596 - 2° Andar<br>Bairro: Cristo Redentor - Porto Alegre - RS<br>Fone: (51) 3357-2139',coords: { latitude: -30.015877, longitude: -51.158803  }  },
                { id: 5, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'HEMORGS<br>Avenida Bento Gonçalves, 3722<br>Hospital Sanatório <br>Bairro:  Partenon - Porto Alegre - RS<br>Fone: (51) 3336-6755',coords: { latitude: -30.062891, longitude: -51.178565  }  },
                { id: 6, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Laboratório Marques Pereira<br>Rua Vasco da Gama, 84<br>Bairro: Bom Fim - Porto Alegre - RS.<br>Fone: (51) 3311-0016',coords: { latitude: -30.031334, longitude: -51.211352  }  },
                { id: 7, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Hospital São Lucas da PUC<br>Avenida Ipiranga, 6690<br>Bairro: Jardim Botânico - Porto Alegre - RS.<br>Fone: (51) 3320-3455',coords: { latitude: -30.055036, longitude: -51.174767  }  },
                { id: 8, icon: 'http://maps.google.com/mapfiles/kml/pal4/icon55.png', showWindow: false, city: 'Porto Alegre', label:'Divina Providência<br>Rua da Gruta, 145<br>Bairro: Glória - Porto Alegre - RS.<br>Fone: (51) 3320-6012',coords: { latitude: -30.085165, longitude: -51.18909  }  }
          ] 
    }; 
    $scope.options = { scrollwheel: true };
    $scope.map.markersEvents = { 
        click: function (marker, eventName, model, args) {
        logMarkerInfo(marker);
        } 
    };
    var logMarkerInfo = function(marker){ 
        var pos = marker.getPosition();
    }; 
}); 