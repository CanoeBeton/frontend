USE canoe;

DROP TABLE IF EXISTS boats;

CREATE TABLE IF NOT EXISTS boats (
  name varchar(100) PRIMARY KEY,
  poids varchar(100),
  longueur varchar(100),
  largeur varchar(100),
  profondeur varchar(100),
  epaisseur varchar(100),
  couleur_exterieure varchar(100),
  couleur_interieure varchar(100),
  renforcement varchar(1000),
  masse_volumique_seche_1 varchar(100),
  resistance_compression_1 varchar(100),
  resistance_tension_1 varchar(100),
  module_young_1 varchar(100),
  masse_volumique_seche_2 varchar(100),
  resistance_compression_2 varchar(100),
  resistance_tension_2 varchar(100),
  module_young_2 varchar(100),
  masse_volumique_seche_3 varchar(100),
  resistance_compression_3 varchar(100),
  resistance_tension_3 varchar(100),
  module_young_3 varchar(100)
);

INSERT INTO boats (name, poids, longueur, largeur, profondeur, epaisseur, couleur_exterieure, couleur_interieure, renforcement, masse_volumique_seche_1, resistance_compression_1, resistance_tension_1, module_young_1, masse_volumique_seche_2, resistance_compression_2, resistance_tension_2, module_young_2, masse_volumique_seche_3, resistance_compression_3, resistance_tension_3, module_young_3)
VALUES
('Sea Breeze', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre', '961 kg/m3', '24,0 MPa', '2,3 MPa', '4,2 GPa', '1025 kg/m3', '9,5 MPa', '0,7 MPa', '4,0 MPa', '993 kg/m3', '23,4 MPa', '2,0 MPa', '3,4 GPa'),
('Wave Runner', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone', '980 kg/m3', '23,5 MPa', '2,1 MPa', '4,5 GPa', '1030 kg/m3', '8,9 MPa', '0,8 MPa', '3,9 GPa', '1000 kg/m3', '22,6 MPa', '1,8 MPa', '3,2 GPa')
;