<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="B PREND_LA_VALEUR A"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2etat="inactif" F2defaut="" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" totalAffichages="1000" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2" arrondiAuto="vrai" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#A" algoitem="A EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#B" algoitem="B EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#C" algoitem="C EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#A#2#pasliste" algoitem="A PREND_LA_VALEUR 2"/>
        <item code="5#B#3#pasliste" algoitem="B PREND_LA_VALEUR 3"/>
        <item code="5#C#5#pasliste" algoitem="C PREND_LA_VALEUR 5"/>
        <item code="5#B#A#pasliste" algoitem="B PREND_LA_VALEUR A"/>
        <item code="5#C#B#pasliste" algoitem="C PREND_LA_VALEUR B"/>
        <item code="5#A#C#pasliste" algoitem="A PREND_LA_VALEUR C"/>
        <item code="3#A#1#pasliste" algoitem="AFFICHER A"/>
        <item code="3#B#1#pasliste" algoitem="AFFICHER B"/>
        <item code="3#C#1#pasliste" algoitem="AFFICHER C"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
