Feature: Operaciones CRUD en el módulo Tarjetas

  Como administrador del sistema bancario
  Quiero realizar operaciones CRUD en las entidades del módulo Tarjetas
  Para asegurar que todo funcione correctamente

  Scenario Outline: Probar CRUD para <entidad>
    Given que estoy autenticado como administrador
    When accedo al módulo Tarjetas y selecciono la entidad "<entidad>"
    Then debería poder crear un nuevo registro correctamente
    And debería poder visualizar los registros existentes
    And debería poder actualizar un registro correctamente
    And debería poder eliminar un registro correctamente

    Examples:
      | entidad                            |
      | Bines globales de tarjetas         |
      | Marcas de tarjetas                 |
      | Grupo de tarjetas                  |
      | Mantenimiento de tipos de tarjetas |
      | Regiones de marcas de tarjetas     |
      | Regiones de tarjetas               |
      | Tarjetas                           |
      | Tipos de tarjetas                  |
