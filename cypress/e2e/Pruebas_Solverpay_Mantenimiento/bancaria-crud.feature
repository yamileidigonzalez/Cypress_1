Feature: Operaciones CRUD en el módulo Bancaria

  Como administrador del sistema bancario
  Quiero realizar operaciones CRUD en las entidades del módulo Bancaria
  Para asegurar que todo funcione correctamente

  Scenario Outline: Probar CRUD para <entidad>
    Given que estoy autenticado como administrador
    When accedo al módulo Bancaria y selecciono la entidad "<entidad>"
    Then debería poder crear un nuevo registro correctamente
    And debería poder visualizar los registros existentes
    And debería poder actualizar un registro correctamente
    And debería poder eliminar un registro correctamente

    Examples:
      | entidad                  |
      | Canales de entidad       |
      | Comisiones               |
      | Acuerdos de comisiones   |
      | Cuentas                  |
      | Enrutamiento PIN online  |
      | Enrutamientos            |
      | Entidades                |
      | Protocolos               |
      | Rangos de bines          |
      | Redes de entidad         |
      | Respaldo de enrutamientos|
      | Textos de error          |
      | Entidades emisoras       |
