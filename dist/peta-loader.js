var petaLoaders = {}

petaLoaders.tampilkanMasjid = function () {
  console.log("Hello!")
}

function tampilkanMasjid() {
  if (masjidLayer) {
    map.removeLayer(masjidLayer)
  }

  $.ajax({
    url: base_url + '/api/masjid.php',
    data: query,
    success: function (response) {
      masjidLayer = new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: masjidIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>kapasitas : '+ feature.properties.kapasitas + '</h4>'
          layer.bindPopup(popup)
        },
      });

      masjidLayer.addTo(map)

    }
  })
}


function tampilkanJalan() {
  if (jalanLayer) {
    map.removeLayer(jalanLayer)
  } else {
    $('#jalan-input').html('<option value="semua">Pilih Jalan</option>')
  }

  $.ajax({
      url: base_url + '/api/jalan.php',
      success: function (response) {
        jalanLayer = new L.GeoJSON(response, {
          onEachFeature: function (feature, layer) {
            if (!jalanLayer){
              $('#jalan-input').append('<option>' + feature.properties.nama + '</option>')
            }
            
            var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
            popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
            layer.bindPopup(popup)
          },
          style: function (feature) {
            if (feature.properties.nama == $('#jalan-input').val()) {
              return {
                "color": "#ff7800",
                "weight": 7,
                "opacity": 0.65
              }
            } else {
              return {
                "color": "blue",
                "weight": 7,
                "opacity": 0.65
              }
            }
          }
        })

        jalanLayer.addTo(map);
      }
    })
}


function peta_awal() {

  $.ajax({
    url: base_url + '/api/bank.php',
    success: function (response) {
      console.log(response);
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: bankIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>jam buka : '+ feature.properties.jam_buka + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  $.ajax({
    url: base_url + '/api/gedung_olahraga.php',
    success: function (response) {
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: gedungOlarahragaIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>kapasitas : '+ feature.properties.kapasitas + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  $.ajax({
    url: base_url + '/api/hotel.php',
    success: function (response) {
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: hotelIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>kapasitas : '+ feature.properties.kapasitas + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  $.ajax({
    url: base_url + '/api/mall_dan_swalayan.php',
    success: function (response) {
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: mallIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>jam buka : '+ feature.properties.jam_buka + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  $.ajax({
    url: base_url + '/api/rumah_makan.php',
    success: function (response) {
      console.log(response);
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: restoranIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>menu : '+ feature.properties.menu + '</h4>'
          popup += '<h4>kapasitas : '+ feature.properties.kapasitas + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  $.ajax({
    url: base_url + '/api/sekolahan.php',
    success: function (response) {
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: sekolahIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>kapasitas : '+ feature.properties.kapasitas + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  $.ajax({
    url: base_url + '/api/tempat_wisata.php',
    success: function (response) {
      new L.GeoJSON(response, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, {icon: wisataIcon})
        },
        onEachFeature: function (feature, layer) {
          var popup = '<img src="'+feature.properties.picture+'" width="300px" heigth="500px"></img>'
          popup += '<h4>nama : '+ feature.properties.nama + '</h4>'
          popup += '<h4>tiket : '+ feature.properties.tiket + '</h4>'
          popup += '<h4>jam buka : '+ feature.properties.jam_buka + '</h4>'
          layer.bindPopup(popup)
        }
      }).addTo(map);
    }
  })

  tampilkanJalan();

  $('body').on('click', '[gid]', function () {
    var gid = $(this).attr('gid')
    var nama = prompt("Masukkan nama")
    var jam_buka = prompt("Masukkan jam buka")

    $.ajax({
      url: base_url + '/api/bank-crud.php',
      data: {
        gid: gid,
        nama: nama,
        jam_buka: jam_buka,
        aksi: 'edit'
      },
      success: function (response) {
        console.log(response);
        window.location = ''
      }
    })
  })

  tampilkanMasjid()

  $('body').on('submit', 'form#form-cari-masjid', function (e) {
    e.preventDefault()

    tampilkanMasjid()
    tampilkanJalan()
  })
}
