import React, {Component} from 'react'

class Angket extends Component{

  render(){
    return(
      <div className="angket">
        <div className="container">
          <div className="box-form">
          <h1>Seid Talent Registration</h1>
          <form action="">
            <div className="form-group">
              <label for="fullname">Nama Lengkap</label>
              <input type="text" className="form-control" id="fullname"/>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="phone">No. Telephone</label>
                <input type="text" className="form-control" id="phone"/>
              </div>
              <div className="form-group col-md-6">
                <label for="medsos">Media Sosial</label>
                <select name="medsos" id="medsos" className="form-control">
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="username_medsos">Username Media Sosial</label>
                <input type="text" className="form-control" id="username_medsos" />
              </div>
              <div className="form-group col-md-6">
                <label for="birth_date">Tanggal Lahir</label>
                <input type="date" className="form-control" id="medsos" />
              </div>
            </div>
            <div className="form-group">
              <label for="school">Nama Sekolah / Universitas</label>
              <input type="text" className="form-control" id="school"/>
            </div>
            <div className="form-group">
              <label for="how_seid">Apa yang kamu ketahui tentang Seid</label>
              <input type="text" className="form-control" id="how_seid" />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="where_seid">Kenal Seid dari mana</label>
                <select name="where_seid" id="where_seid" className="form-control">
                  <option value="Website">Website</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Teman">Teman</option>
                  <option value="Sosial Media">Sosial Media</option>
                  <option value="Sekolah / Kampus">Sekoalh / Kampus</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="bidang_part_time">Bidang Part time yang kamu minati (Max 2)</label>
              </div>
              <div className="form-row">
              <div className="form-group col-md-6">
                  <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Guru Private Akademis (ex: Matematika, Sains, dll)" id="defaultCheck1"/>
                      <label class="form-check-label" for="defaultCheck1">
                        Guru Private Akademis (ex: Matematika, Sains, dll)
                      </label>   
                  </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Guru Private Minat Bakat (ex: Musik, Komputer, dll)" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Guru Private Minat Bakat (ex: Musik, Komputer, dll)
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Guru Private Agama (ex: Iqra, Alqur'an, Sekolah Minggu, dll)
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Barista" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Barista
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Waiter / Waitress" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Waiter / Waitress
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Singer / Band (ex: Cafe, Wedding)" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Singer / Band (ex: Cafe, Wedding)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="House Cleaning" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    House Cleaning
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Waiter / Waitress" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Waiter / Waitress
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Cuci Setrika" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Cuci Setrika
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Supir (Travel / Pribadi)" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Supir (Travel / Pribadi)
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Technician (Home Appliance dan IT)" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Technician (Home Appliance dan IT)
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Otomotive" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Otomotive
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Gardener" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Gardener
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Home Cooker" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Home Cooker
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Beauty Care (ex: Make up Artist)" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Beauty Care (ex: Make up Artist)
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Hair stylish" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Hair stylish
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Shoping Partner" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Shoping Partner
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Koki Masak" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Koki Masak
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Guide" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Guide
                      </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="MC" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    MC
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Sales Promotion GIrl / Boy" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Sales Promotion GIrl / Boy
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Social Media Promotion" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Social Media Promotion
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Social Media Handling" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Social Media Handling
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Accounting" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Accounting
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Graphic Designer" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Graphic Designer
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Video Editor" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Video Editor
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" name="parttime" type="checkbox" value="Fotografer" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Fotografer
                  </label>
                </div>
              </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="minat_volunter">Apakah kamu berminat untuk menjadi Volunter</label>
                  <select name="minat_volunter" id="minat_volunter" className="form-control">
                    <option value="Iya">Iya</option>
                    <option value="Tidak">Tidak</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="bidang_volunteer">Jika Ya bidang Volunteer apa yang kamu minati ?</label>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="isi_value" id="defaultCheck1"/>
                      <label class="form-check-label" for="defaultCheck1">
                        isi_value
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="isi_value" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      isi_value
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="isi_value" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      isi_value
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="isi_value" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      isi_value
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="isi_value" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      isi_value
                      </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="isi_value" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                      isi_value
                      </label>
                  </div>
                  
                </div>
              </div>
          </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Angket;