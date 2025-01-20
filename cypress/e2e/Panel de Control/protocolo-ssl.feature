Feature: Verificar el Protocolo SSL del sitio

  Como usuario del sistema
  Quiero asegurarme de que el sitio utiliza un protocolo seguro
  Para proteger mi información y garantizar la seguridad de la conexión

  Scenario: Verificar que la URL utiliza HTTPS
    Given que accedo a la página web del sistema
    When observo la barra de direcciones
    Then la URL debe comenzar con "https://"
    And el icono del candado debe estar presente en la barra de direcciones

  Scenario: Comprobar los detalles del certificado SSL
    Given que accedo a la página web del sistema
    When hago clic en el icono del candado cerca de la barra de direcciones
    Then debo poder visualizar los detalles del certificado SSL, incluyendo su validez y emisor
