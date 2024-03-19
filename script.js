document.getElementById("pegawaiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nama = document.getElementById("nama").value;
    const jabatan = document.getElementById("jabatan").value;
    const status = document.getElementById("status").value;
    let gaji;
    
    if (jabatan === "manager") {
      gaji = 15000000;
    } else if (jabatan === "asisten manager") {
      gaji = 10000000;
    } else if (jabatan === "staff") {
      gaji = 5000000;
    }
    
    let tunjanganJabatan = 0.15 * gaji;
    let bpjs = 0.1 * gaji;
    let tunjanganKeluarga = status === "menikah" ? 0.2 * gaji : 0;
    
    const totalGaji = gaji + tunjanganJabatan - bpjs + tunjanganKeluarga;
    
    const message = `
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Nama Pegawai:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${nama}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Jabatan:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${jabatan}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Status:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${status}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Gaji Pokok:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${gaji}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Tunjangan Jabatan:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${tunjanganJabatan}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">BPJS:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${bpjs}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Tunjangan Keluarga:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${tunjanganKeluarga}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Total Gaji:</td>
          <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${totalGaji}</td>
        </tr>
      </table>
    `;
    
    swal({
      title: "Data Pegawai",
      content: {
        element: "div",
        attributes: {
          innerHTML: message
        },
      },
      icon: "info"
    });
  });
